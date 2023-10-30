import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 100%;
`;

interface InputProps {
  $hasIcon?: boolean;
  $error?: boolean;
}

export const Input = styled.input<InputProps>`
  border: 0;
  outline: none;
  border-radius: 1000px;
  background: rgba(255, 255, 255, 0.08);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25),
    1px 1px 5px 1px rgba(255, 255, 255, 0.32) inset;
  backdrop-filter: blur(8px);
  padding: 16px;
  padding-right: ${({ $hasIcon }) => ($hasIcon ? '48px' : '16px')};
  width: 100%;
  border: 2px solid rgba(255, 255, 255, 0.32);
  border-color: ${({ $error, theme }) =>
    $error ? theme.colors.error : 'rgba(255, 255, 255, 0.32)'};

  color: ${({ theme }) => theme.colors.neutral50};
  font-size: 14px;
  font-family: inherit;

  transition: box-shadow 300ms ease, border-color 300ms ease;

  ::placeholder {
    color: ${({ theme }) => theme.colors.neutral50};
  }

  &:focus {
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25),
      1px 1px 5px 1px rgba(255, 255, 255, 0.5) inset;
  }
`;

export const IconContainer = styled.div`
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
`;

export const ErrorText = styled.p`
  color: ${({ theme }) => theme.colors.error};
  font-size: 12px;
  font-weight: 600;
  margin-top: 4px;

  @keyframes showUp {
    0% {
      transform: translateY(30%);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }

  animation: showUp 300ms ease;
`;
