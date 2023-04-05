import Image from 'next/image';
import styles from './newsletter-page.module.scss';
import PrimaryButton from '../shared/primary-button/primary-button';

export default function NewsletterPage() {
  const inputItems = [
    { name: 'firstName', label: 'First Name' },
    { name: 'lastName', label: 'Last Name' },
    // { component: <EmailInput register={register} /> },
  ];
  return (
    <div className={styles.container}>
      <div>
        {/* <Image /> */}
        <form>
          <p>NEWSLETTER</p>
          <p>Sign up for updates</p>
          <p>
            Sign up with your email address to receive news and updates on my
            latest exhibitions & works.
          </p>
          {inputItems.map(input => {
            return !input.component ? (
              <InputShell
                register={register}
                name={input.name}
                label={label}
                styles={styles}
              />
            ) : (
              input.component
            );
          })}
          <PrimaryButton />
        </form>
      </div>
    </div>
  );
}
