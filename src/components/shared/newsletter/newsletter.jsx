import PrimaryButton from "../primary-button/primary-button";
import styles from "./newsletter.module.scss";

export default function Newsletter() {
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <p className={styles.signUp}>Stay Connected</p>
        <p className={styles.description}>
          Enter your email address to receive news and updates on my latest
          works and upcoming events.
        </p>
        <div className={styles.row}>
          <input
            type="email"
            className={styles.emailInput}
            placeholder="Enter Email Address"
          />
          <PrimaryButton classNames={styles.button}>Sign Up</PrimaryButton>
        </div>
      </form>
    </div>
  );
}
