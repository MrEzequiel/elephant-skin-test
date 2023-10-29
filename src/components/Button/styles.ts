import styled from 'styled-components';
import { ButtonProps, ButtonVariant } from './types';
import { theme } from '@/styles/theme';

const backgroundByVariant: Record<ButtonVariant, string> = {
  primary: theme.colors.white,
  secondary: 'rgba(255, 255, 255, 0.08)'
};

const colorByVariant: Record<ButtonVariant, string> = {
  primary: theme.colors.black,
  secondary: theme.colors.neutral50
};

export const Button = styled.button<ButtonProps>`
  width: ${({ $fullWidth = false }) => ($fullWidth ? '100%' : 'auto')};
  cursor: pointer;
  border-radius: 1000px;
  background: ${({ $variant = 'primary' }) => backgroundByVariant[$variant]};
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25),
    1px 1px 5px 1px rgba(255, 255, 255, 0.32) inset;
  backdrop-filter: blur(8px);

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  height: 48px;
  padding: 0 16px;

  color: ${({ $variant = 'primary' }) => colorByVariant[$variant]};
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0.56px;
  text-transform: uppercase;

  transition: background 300ms ease-in-out, color 300ms ease-in-out;

  &:disabled {
    cursor: default;
  }

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.black};
  }
`;

Button.defaultProps = {
  $fullWidth: false,
  $variant: 'primary'
};
