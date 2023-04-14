import { useForm } from 'react-hook-form';
import InputShell from '../shared/form-components/input-shell/input-shell';
import styles from './newsletter-page.module.scss';
import EmailInput from '../shared/form-components/email-input/email-input';
import PrimaryButton from '../shared/primary-button/primary-button';
import ImageCarousel from '../shared/painting-info-template/image-carousel/image-carousel';
import ok from 'images/emailListImage.png';
import Image from 'next/image';

export default function NewsletterPage() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const image = [
    {
      url: '/images/emailListImage.png',
      width: 404,
      height: 408.25,
      alt: 'Abstract painting',
    },
  ];

  const onSubmit = formData => {
    console.log(formData);
  };

  return (
    <div className={styles.container}>
      <ImageCarousel images={image} />
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.upperText}>
          <p className={styles.title}>NEWSLETTER</p>
          <p className={styles.signUp}>Sign up for updates</p>
          <p className={styles.description}>
            Sign up with your email address to receive news and updates on my
            latest exhibitions & works.
          </p>
        </div>
        <InputShell
          register={register}
          name='firstName'
          type='input'
          required={true}
          label={'First Name'}
          classNames={{
            gridArea: styles.firstName,
          }}
          errors={{
            formError: errors.firstName,
            message: 'First name is required',
          }}
        />

        <InputShell
          register={register}
          name='lastName'
          type='input'
          required={true}
          label={'Last Name'}
          classNames={{
            gridArea: styles.lastName,
          }}
          errors={{
            formError: errors.lastName,
            message: 'Last name is required',
          }}
        />

        <EmailInput
          register={register}
          errors={errors}
          classNames={styles.email}
        />

        <PrimaryButton classNames={styles.joinEmailButton}>
          Join the Email List
        </PrimaryButton>
      </form>
    </div>
  );
}
