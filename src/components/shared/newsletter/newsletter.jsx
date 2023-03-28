import RightArrow from '../svg/right-arrow/right-arrow';

export default function Newsletter() {
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <p className={styles.title}>NEWSLETTER</p>
        <p className={styles.signUp}>Sign up for updates</p>
        <p className={styles.description}>
          Sign up with your email address to receive news and updates on my
          latest exhibitions & works.
        </p>
        <div className={styles.createRow}>
          <input className={styles.emailInput} />
          <button className={styles.button}>
            <p>Sign Up</p>
            <RightArrow />
          </button>
        </div>
      </form>
    </div>
  );
}
