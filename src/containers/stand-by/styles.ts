import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 80px;
  height: 100%;

  @keyframes slideRight {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(0);
    }
  }

  animation: slideRight 1500ms ease-in-out;
`;

export const BottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 24px;
  font-weight: 400;
  letter-spacing: 4px;
  text-transform: uppercase;
`;

export const FooterContainer = styled.footer`
  padding: 34px;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
`;
