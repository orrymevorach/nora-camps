import { useState } from "react";
import PrimaryButton from "../primary-button/primary-button";
import styles from "./newsletter.module.scss";
import Loader from "../loader/loader";
import { emailValidator } from "@/utils/string-utils";

const Submitted = () => (
  <div className={styles.submitted}>
    <p className={styles.title}>Thank you for your submission!</p>
    <p className={styles.bodyCopy}>We will be in touch!</p>
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
      const { data, error } = await fetch(
        "/api/create-mailer-lite-subscription",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({ email }),
        }
      ).then(res => res.json());

      if (error) {
        setIsLoading(false);
        setError(error.message);
      } else if (data) {
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
