import { useForm } from "react-hook-form";
import InputShell from "../shared/form-components/input-shell/input-shell";
import styles from "./newsletter-page.module.scss";
import EmailInput from "../shared/form-components/email-input/email-input";
import PrimaryButton from "../shared/primary-button/primary-button";
import ImageCarousel from "../shared/painting-info-template/image-carousel/image-carousel";
import { useWindowSize } from "@/hooks";
import { useState } from "react";
import Loader from "../shared/loader/loader";
import clsx from "clsx";
import { Submitted } from "@/components/shared/newsletter/newsletter";
import { createMailerLiteSubscriber } from "@/lib/mailer-lite";

export default function NewsletterPage() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formError, setFormError] = useState("");

  const { isMobile } = useWindowSize();

  const image = [
    {
      url: "/images/newsletter-image.jpg",
      width: 404,
      height: 408.25,
      description: "Abstract painting",
    },
  ];

  const onSubmit = async ({ firstName, lastName, email }) => {
    setIsLoading(true);
    const { data, error } = await createMailerLiteSubscriber({
      email,
      name: `${firstName} ${lastName}`,
    });

    if (error) {
      setIsLoading(false);
      setFormError(error.message);
    } else if (data) {
      setIsLoading(false);
      setIsSubmitted(true);
    }
  };

  if (isSubmitted) {
    return (
      <div className={styles.container}>
        <Submitted />
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.maxWidth}>
        {!isMobile && (
          <ImageCarousel
            images={image}
            hasBackground={false}
            classNames={styles.image}
          />
        )}
        <form
          className={clsx(
            styles.form,
            isLoading || isSubmitted ? styles.center : ""
          )}
          onSubmit={handleSubmit(onSubmit)}
        >
          {isLoading ? (
            <Loader centerInContainer />
          ) : (
            <>
              <div className={styles.upperText}>
                <p className={styles.signUp}>Sign up for updates</p>
                <p className={styles.description}>
                  Sign up with your email address to receive news and updates on
                  my latest exhibitions & works.
                </p>
              </div>
              {formError && <p className={styles.errorMessage}>{formError}</p>}
              <InputShell
                register={register}
                name="firstName"
                type="input"
                required={true}
                label={"First Name"}
                classNames={{
                  gridArea: styles.firstName,
                }}
                errors={{
                  formError: errors.firstName,
                  message: "First name is required",
                }}
              />

              <InputShell
                register={register}
                name="lastName"
                type="input"
                required={true}
                label={"Last Name"}
                classNames={{
                  gridArea: styles.lastName,
                }}
                errors={{
                  formError: errors.lastName,
                  message: "Last name is required",
                }}
              />

              <EmailInput register={register} errors={errors} />

              <PrimaryButton classNames={styles.joinEmailButton}>
                Join the Email List
              </PrimaryButton>
            </>
          )}
        </form>
      </div>
    </div>
  );
}
