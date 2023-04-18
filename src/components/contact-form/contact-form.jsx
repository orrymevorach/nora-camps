import { useForm } from 'react-hook-form';
import styles from './contact-form.module.scss';
import styledInput from '../shared/form-components/shared-input.module.scss';
import EmailInput from '../shared/form-components/email-input';
import DropDown from '../shared/form-components/drop-down';
import InputShell from '../shared/form-components/input-shell';
import PrimaryButton from '../shared/primary-button';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function ContactForm({ dropDownListItems }) {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const onSubmit = formData => {
    console.log(formData);
  };

  const { query } = useRouter();
  useEffect(() => {
    if (query?.painting) {
      setValue('paintings', query.painting);
    } else {
      setValue('paintings', '');
    }
  }, [query.painting, setValue]);
  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <h1 className={styles.title}>Send a message</h1>

        <InputShell
          register={register}
          name="firstName"
          type="input"
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
          name="lastName"
          type="input"
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
          classNames={{ email: styles.email }}
          register={register}
          errors={errors}
        />

        <DropDown
          isReactHookForm={true}
          listItems={dropDownListItems}
          attributes={{
            placeholder: 'Type painting',
            ...register('paintings'),
          }}
          classNames={{
            container: styles.painting,
            inputGroup: styledInput.formGroup,
            input: styledInput.input,
            label: styledInput.label,
            dropDownButton: styledInput.dropDownButton,
          }}
          label="Painting(s) interested in"
          setValue={setValue}
        />

        <InputShell
          register={register}
          name="subject"
          type="input"
          required={true}
          label={'Subject'}
          classNames={{
            gridArea: styles.subject,
          }}
          errors={{
            formError: errors.subject,
            message: 'Last name is required',
          }}
        />

        <InputShell
          register={register}
          name="message"
          type="textarea"
          required={true}
          label={'Message'}
          classNames={{
            gridArea: styles.message,
          }}
          errors={{
            formError: errors.message,
            message: 'A message is required',
          }}
        />

        <PrimaryButton classNames={styles.submitButton}>Submit</PrimaryButton>
      </form>
    </div>
  );
}
