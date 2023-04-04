import { useState } from 'react';
import { useForm } from 'react-hook-form';
import RightArrow from 'svg/right-arrow/right-arrow';
import styles from './contact-form.module.scss';
import EmailInput from './email-input';
import PaintingsInput from './paintings-input';
import InputShell from './input-shell';

export default function ContactForm() {
  const [isToggled, setIsToggled] = useState(false);
  const formInputs = [
    { name: 'firstName', label: 'First Name' },
    { name: 'lastName', label: 'Last Name' },
    { name: 'subject', label: 'Subject' },
    { name: 'message', label: 'Message' },
  ];
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const onSubmit = formData => {
    console.log(formData);
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <h1 className={styles.title}>Send a message</h1>

        {formInputs.map(input => {
          return (
            <InputShell
              key={input.name}
              name={input.name}
              label={input.label}
              styles={styles}
              register={register}
              errors={errors}
            />
          );
        })}

        <EmailInput styles={styles} register={register} errors={errors} />

        <PaintingsInput
          styles={styles}
          isToggled={isToggled}
          setIsToggled={setIsToggled}
          register={register}
          setValue={setValue}
        />

        <button className={styles.submitButton} type='submit'>
          <p>Submit</p>
          <RightArrow />
        </button>
      </form>
    </div>
  );
}
