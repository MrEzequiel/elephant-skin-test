import React, { forwardRef, Ref } from 'react';

import * as S from './styles';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: JSX.Element;
  errorText?: string;
}

function InputInner(
  { icon, errorText, ...props }: InputProps,
  ref: Ref<HTMLInputElement>
) {
  return (
    <S.Container>
      <S.Input ref={ref} {...props} />
    </S.Container>
  );
}

export default forwardRef(InputInner);
