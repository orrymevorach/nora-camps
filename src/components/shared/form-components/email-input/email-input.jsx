import { useState } from "react";
import clsx from "clsx";
import Error from "svg/error";
import Success from "svg/success";
import { emailValidator, emailValidatingRegex } from "@/utils/string-utils";
import styles from "../shared-input.module.scss";

export default function EmailInput({ classNames, register, errors }) {
  const [isEmailValidated, setIsEmailValidated] = useState(false);

  const handleEmailInputChange = e => {
    const email = e.target.value;
    const isValidEmail = emailValidator(email);

    if (isValidEmail) {
      setIsEmailValidated(true);
    } else {
      setIsEmailValidated(false);
    }
  };

  return (
    <div
      className={clsx(
        styles.formGroup,
        classNames.email,
        errors.email ? styles.activeError : ""
      )}
    >
      <label className={styles.label}>Email Address</label>
      <input
        className={styles.input}
        placeholder="Type email address"
        type="text"
        {...register("email", {
          pattern: emailValidatingRegex,
          onChange: e => handleEmailInputChange(e),
          required: true,
        })}
      />
      {errors.email && (
        <>
          <Error classNames={styles.emailValidation} />
          <div className={styles.errorText}>{`${
            errors.email.type === "required"
              ? "Email is required"
              : "Invalid email address"
          }`}</div>
        </>
      )}
      {!errors.email && isEmailValidated && (
        <Success classNames={styles.emailValidation} />
      )}
    </div>
  );
}
