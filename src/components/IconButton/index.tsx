import React, { HTMLAttributes } from 'react';
import * as S from './styles';

interface IconButtonProps extends HTMLAttributes<HTMLButtonElement> {
  icon: JSX.Element;
}

export default function IconButton({ icon, ...props }: IconButtonProps) {
  return <S.ButtonContainer {...props}>{icon}</S.ButtonContainer>;
}
