import RightArrow from 'svg/right-arrow/right-arrow';
import styles from './contact-form.module.scss';

export default function ContactForm() {
  const purposeOptions = [
    { value: '', text: 'Please select an option' },
    { value: 'buying', text: 'Buying' },
    { value: 'general', text: 'General inquiry' },
  ];

  const handleSubmit = e => {
    e.preventDefault();
    console.log(`[Submitted Form!]`);
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={e => handleSubmit(e)}>
        <h1 className={styles.title}>Send a message</h1>
        <div className={styles.row}>
          <div className={styles.formGroup}>
            <label className={styles.label}>First Name</label>
            <input type='text' id='first-name' name='first-name' required />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>Last Name</label>
            <input type='text' id='last-name' name='last-name' required />
          </div>
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label}>Email Address</label>
          <input type='email' id='email' name='email' required />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label}>Purpose</label>
          <select id='purpose' name='purpose' required>
            {purposeOptions.map(item => {
              return (
                <option key={item.value} value={item.value}>
                  {item.text}
                </option>
              );
            })}
          </select>
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label}>Painting(s) interested in</label>
          <input type='text' id='paintings' name='paintings' required />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label}>Message</label>
          <textarea id='message' name='message' required></textarea>
        </div>

        <button className={styles.submitButton} type='submit'>
          <p>Submit</p>
          <RightArrow />
        </button>
      </form>
    </div>
  );
}
