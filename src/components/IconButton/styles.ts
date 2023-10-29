import styled from 'styled-components';

export const ButtonContainer = styled.button`
  display: flex;
  padding: 16px;
  justify-content: center;
  align-items: center;
  border: 0;
  -webkit-tap-highlight-color: transparent;
  transition: transform 300ms ease, box-shadow 300ms ease;
  cursor: pointer;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(8px);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  &:hover {
    transform: scale(1.35);
    box-shadow: 1px 1px 5px 1px rgba(255, 255, 255, 0.32) inset,
      0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  }
`;
