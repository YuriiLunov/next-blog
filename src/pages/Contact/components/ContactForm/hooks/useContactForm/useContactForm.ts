import { FormEvent, useState } from 'react';
import IContactFormValues from '@/src/pages/Contact/components/ContactForm/hooks/useContactForm/interfaces/IContactFormValues';
import apiRequest from '@/src/helpers/api';

function useContactForm() {
  const [values, setValue] = useState<IContactFormValues>({
    email: '',
    name: '',
    message: '',
  });

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const response = await apiRequest.post('/api/contact', {
      email: values.email,
      name: values.name,
      message: values.message,
    });

    console.log('response', response);
  };

  return {
    values,
    setFieldValue: (field: keyof IContactFormValues, value: string) =>
      setValue((prevState) => ({
        ...prevState,
        [field]: value,
      })),
    onSubmit,
  };
}

export default useContactForm;
