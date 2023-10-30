import { useState } from 'react';
import { useFormCase } from './useFormCase';
import { Controller } from 'react-hook-form';

import Button from '@/components/Button';
import { ArrowLongRight, Close, EyeClosed, EyeOpen } from '@/components/Icon';
import Input from '@/components/Input';
import * as S from './styles';

export default function LoginForm() {
  const { control, submitForm } = useFormCase();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <form onSubmit={submitForm} noValidate>
        <S.FieldsContainer>
          <Controller
            name="email"
            control={control}
            render={({ field, formState }) => (
              <Input
                placeholder="Type your email"
                type="email"
                {...field}
                errorText={formState.errors.email?.message}
                error={!!formState.errors.email}
                icon={
                  field.value.trim() ? (
                    <S.ButtonIconInput
                      type="button"
                      onClick={() => field.onChange('')}
                    >
                      <Close size="small" />
                    </S.ButtonIconInput>
                  ) : undefined
                }
              />
            )}
          />

          <Controller
            name="password"
            control={control}
            render={({ field, formState }) => (
              <Input
                placeholder="Type your password"
                type={showPassword ? 'text' : 'password'}
                {...field}
                errorText={formState.errors.password?.message}
                error={!!formState.errors.password}
                icon={
                  <S.ButtonIconInput
                    type="button"
                    onClick={() => setShowPassword(prev => !prev)}
                  >
                    {showPassword ? (
                      <EyeOpen size="small" />
                    ) : (
                      <EyeClosed size="small" />
                    )}
                  </S.ButtonIconInput>
                }
              />
            )}
          />
        </S.FieldsContainer>

        <Button
          type="submit"
          $fullWidth
          rightIcon={<ArrowLongRight size="extrasmall" />}
        >
          Login
        </Button>
      </form>
    </>
  );
}
