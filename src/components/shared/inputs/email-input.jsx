import { useState } from 'react';
import clsx from 'clsx';
import EmailValidationError from 'svg/email-validation-error';
import EmailValidationSuccess from 'svg/email-validation-success';
import { emailValidator } from '@/utils/string-utils';
import styles from './shared-inputs.module.scss';

export default function EmailInput({ classNames, register, errors }) {
  const [isEmailValidated, setIsEmailValidated] = useState(false);

  const handleEmailInputChange = e => {
    if (emailValidator.test(e.target.value)) {
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
        errors.email ? styles.activeError : ''
      )}
    >
      <label className={styles.label}>Email Address</label>
      <input
        className={styles.input}
        placeholder='Type email address'
        type='text'
        {...register('email', {
          pattern: emailValidator,
          onChange: e => handleEmailInputChange(e),
          required: true,
        })}
      />
      {errors.email && (
        <>
          <div className={styles.emailValidation}>
            <EmailValidationError />
          </div>
          <div className={styles.errorText}>{`${
            errors.email.type === 'required'
              ? 'Email is required'
              : 'Invalid email address'
          }`}</div>
        </>
      )}
      {!errors.email && isEmailValidated && (
        <div className={styles.emailValidation}>
          <EmailValidationSuccess />
        </div>
      )}
    </div>
  );
}