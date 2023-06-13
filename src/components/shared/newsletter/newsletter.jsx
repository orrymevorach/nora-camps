import { useState } from "react";
import PrimaryButton from "../primary-button/primary-button";
import styles from "./newsletter.module.scss";
import Loader from "../loader/loader";
import { emailValidator } from "@/utils/string-utils";
import {
  createMailerLiteSubscriber,
  addMailerLiteSubscriberToGroup,
} from "@/lib/mailer-lite";

export const Submitted = () => (
  <div className={styles.submitted}>
    <p className={styles.title}>Thank you for subscribing!</p>
  </div>
);
export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const isEmailValid = emailValidator(email);
  async function handleClick(e) {
    e.preventDefault();
    if (!email || !isEmailValid) {
      setError("Please enter a valid email");
    } else {
      setIsLoading(true);
      const { data, error } = await createMailerLiteSubscriber({ email });

      if (error) {
        setIsLoading(false);
        setError(error.message);
      } else if (data) {
        await addMailerLiteSubscriberToGroup({
          subscriberId: data.id,
          groupId: process.env.STAY_CONNECTED_GROUP_ID,
        });
        setIsLoading(false);
        setIsSubmitted(true);
      }
    }
  }

  const handleChange = e => {
    setError("");
    setEmail(e.target.value);
  };

  if (isLoading)
    return (
      <div className={styles.container}>
        <Loader />
      </div>
    );
  return (
    <div className={styles.container}>
      {isSubmitted ? (
        <Submitted />
      ) : (
        <form className={styles.form}>
          <p className={styles.signUp}>Stay Connected</p>
          <p className={styles.description}>
            Enter your email address to receive news and updates on my latest
            works and upcoming events.
          </p>
          {error && <p className={styles.errorMessage}>{error}</p>}
          <div className={styles.row}>
            <input
              type="email"
              className={styles.emailInput}
              placeholder="Enter Email Address"
              value={email}
              onChange={handleChange}
            />

            <PrimaryButton handleClick={handleClick} classNames={styles.button}>
              Sign Up
            </PrimaryButton>
          </div>
        </form>
      )}
    </div>
  );
}
