import styled from 'styled-components';

export const Container = styled.div``;

export const Input = styled.input`
  border: 0;
  outline: none;
  border-radius: 1000px;
  background: rgba(255, 255, 255, 0.08);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25),
    1px 1px 5px 1px rgba(255, 255, 255, 0.32) inset;
  backdrop-filter: blur(8px);
  padding: 16px;
  width: 100%;

  color: ${({ theme }) => theme.colors.neutral50};
  font-size: 14px;
  font-family: inherit;

  transition: box-shadow 300ms ease;

  ::placeholder {
    color: ${({ theme }) => theme.colors.neutral50};
  }

  &:focus {
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25),
      1px 1px 5px 1px rgba(255, 255, 255, 0.8) inset;
  }
`;
