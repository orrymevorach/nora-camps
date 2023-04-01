import { useState } from 'react';
import { useForm } from 'react-hook-form';
import clsx from 'clsx';
import RightArrow from 'svg/right-arrow/right-arrow';
import styles from './contact-form.module.scss';
import DropDownMenu from './drop-down-menu/drop-down-menu';

export default function ContactForm() {
  const [isToggled, setIsToggled] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = formData => {
    console.log(formData);
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <h1 className={styles.title}>Send a message</h1>

        <div
          className={clsx(
            styles.formGroup,
            styles.firstName,
            errors.firstName ? styles.errorActive : ''
          )}
        >
          <label>First Name</label>
          <input
            className={clsx(styles.input)}
            type='text'
            {...register('firstName', { required: true })}
          />
          {errors.lastName && (
            <div className={styles.errorText}>First name is required</div>
          )}
        </div>

        <div
          className={clsx(
            styles.formGroup,
            styles.lastName,
            errors.lastName ? styles.errorActive : ''
          )}
        >
          <label>Last Name</label>
          <input
            className={styles.input}
            type='text'
            {...register('lastName', { required: true })}
          />
          {errors.lastName && (
            <div className={styles.errorText}>Last name is required</div>
          )}
        </div>

        <div
          className={clsx(
            styles.formGroup,
            styles.email,
            errors.lastName ? styles.errorActive : ''
          )}
        >
          <label>Email Address</label>
          <input
            className={styles.input}
            type='text'
            {...register('email', {
              required: true,
              pattern:
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            })}
          />
          {errors.email && (
            <div className={styles.errorText}>{`${
              errors.email.type === 'required'
                ? 'Email is required'
                : 'Invalid email address'
            }`}</div>
          )}
        </div>

        <div className={styles.painting}>
          <div className={clsx(styles.formGroup)}>
            <label>Painting(s) interested in</label>
            <input className={styles.input} />
            <button
              type='button'
              className={styles.dropDownButton}
              onClick={() => setIsToggled(prev => !prev)}
            >{`>`}</button>
          </div>
          <DropDownMenu isToggled={isToggled} selectedOption={selectedOption} />
        </div>

        <div
          className={clsx(
            styles.formGroup,
            styles.subject,
            errors.lastName ? styles.errorActive : ''
          )}
        >
          <label>Subject</label>
          <input
            className={styles.input}
            type='text'
            {...register('subject', { required: true })}
          />
          {errors.subject && (
            <div className={styles.errorText}>Subject is required</div>
          )}
        </div>

        <div
          className={clsx(
            styles.formGroup,
            styles.message,
            errors.message ? styles.errorActive : ''
          )}
        >
          <label>Message</label>
          <textarea
            className={styles.messageBox}
            {...register('message', { required: true })}
          />
          {errors.message && (
            <div className={styles.errorText}>A message is required</div>
          )}
        </div>

        <button className={styles.submitButton} type='submit'>
          <p>Submit</p>
          <RightArrow />
        </button>
      </form>
    </div>
  );
}
