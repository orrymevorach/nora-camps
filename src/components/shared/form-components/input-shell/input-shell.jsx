import clsx from 'clsx';
import styles from '../shared-input.module.scss';

export default function InputShell({
  type = '',
  name,
  label,
  errors = '',
  register,
  classNames = '',
  required = false,
}) {
  const inputType = {
    input: (
      <input
        className={styles.input}
        placeholder='Type text'
        type='text'
        {...register(name, { required: required })}
      />
    ),
    textarea: (
      <textarea
        className={styles.textarea}
        placeholder='Type a message'
        type='text'
        {...register(name, { required: required })}
      />
    ),
  };

  return (
    <div
      className={clsx(
        styles.formGroup,
        classNames.gridArea,
        errors.formError ? styles.activeError : ''
      )}
    >
      <label className={styles.label}>{label}</label>

      {inputType[type]}

      {errors.formError && (
        <div className={styles.errorText}>{errors.message}</div>
      )}
    </div>
  );
}
