import { FormEvent, useState } from 'react';
import IContactFormValues from '@/src/pages/Contact/components/ContactForm/hooks/useContactForm/interfaces/IContactFormValues';
import apiRequest from '@/src/helpers/api';
import { toast } from 'react-toastify';

function useContactForm() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [values, setValue] = useState<IContactFormValues>({
    email: '',
    name: '',
    message: '',
  });

  const clearValues = () =>
    setValue({
      email: '',
      name: '',
      message: '',
    });

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      await apiRequest.post('/api/contact', {
        email: values.email,
        name: values.name,
        message: values.message,
      });
      setIsLoading(false);
      toast.success('The message was sent successfully');
      clearValues();
    } catch (e) {
      setIsLoading(false);
      toast.error('Unable to send your message, please try again later');
    }
  };

  return {
    values,
    isLoading,
    setFieldValue: (field: keyof IContactFormValues, value: string) =>
      setValue((prevState) => ({
        ...prevState,
        [field]: value,
      })),
    onSubmit,
  };
}

export default useContactForm;
