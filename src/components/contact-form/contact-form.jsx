import { useState } from 'react';
import { useForm } from 'react-hook-form';
import RightArrow from 'svg/right-arrow/right-arrow';
import styles from './contact-form.module.scss';
import EmailInput from './email-input';
import PaintingsInput from './paintings-input';
import InputShell from './input-shell';
import PrimaryButton from '../shared/primary-button/primary-button';

export default function ContactForm() {
  const [isToggled, setIsToggled] = useState(false);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const formInputs = [
    { name: 'firstName', label: 'First Name' },
    { name: 'lastName', label: 'Last Name' },
    {
      component: (
        <EmailInput
          key={'emailInput'}
          styles={styles}
          register={register}
          errors={errors}
        />
      ),
    },
    {
      component: (
        <PaintingsInput
          key={'paintingInput'}
          styles={styles}
          isToggled={isToggled}
          setIsToggled={setIsToggled}
          register={register}
          setValue={setValue}
        />
      ),
    },
    { name: 'subject', label: 'Subject' },
    { name: 'message', label: 'Message' },
  ];

  const onSubmit = formData => {
    console.log(formData);
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <h1 className={styles.title}>Send a message</h1>

        {formInputs.map(input => {
          return !input.component ? (
            <InputShell
              key={input.name}
              name={input.name}
              label={input.label}
              styles={styles}
              register={register}
              errors={errors}
            />
          ) : (
            input.component
          );
        })}

        <PrimaryButton classNames={styles.submitButton}>Submit</PrimaryButton>
      </form>
    </div>
  );
}
