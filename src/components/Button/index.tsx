import React, { forwardRef } from 'react';
import * as S from './styles';
import { ButtonComponentProps } from './types';

function Button(
  {
    children,
    $variant = 'primary',
    leftIcon,
    rightIcon,
    ...props
  }: ButtonComponentProps,
  ref: React.Ref<HTMLButtonElement>
) {
  return (
    <S.Button {...props} $variant={$variant} ref={ref}>
      {leftIcon}
      {children}
      {rightIcon}
    </S.Button>
  );
}

export default forwardRef(Button);
