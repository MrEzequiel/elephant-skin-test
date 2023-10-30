import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import validationSchema from './validationSchema';
import { useRouter } from 'next/navigation';

export const useFormCase = () => {
  const router = useRouter();
  const { handleSubmit, ...rest } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      email: '',
      password: ''
    }
  });

  const submitForm = handleSubmit(data => {
    router.push('/home');
  });

  return { submitForm, ...rest };
};
