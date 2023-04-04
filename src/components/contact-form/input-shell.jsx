import clsx from 'clsx';

export default function InputShell({ styles, name, label, errors, register }) {
  return (
    <div
      className={clsx(
        styles.formGroup,
        styles[name],
        errors[name] ? styles.errorActive : ''
      )}
    >
      <label>{label}</label>
      {name !== 'message' ? (
        <input
          className={styles.input}
          placeholder='Type text'
          type='text'
          {...register(name, { required: true })}
        />
      ) : (
        <textarea
          className={styles.messageBox}
          placeholder='Type a message'
          type='text'
          {...register('message', { required: true })}
        />
      )}
      {errors[name] && (
        <div className={styles.errorText}>{`${label} is required`}</div>
      )}
    </div>
  );
}
