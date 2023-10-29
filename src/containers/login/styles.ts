import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1034px;
  width: 100%;
  margin: auto;

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

export const CardContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 4fr 3fr;
  padding: 48px;
  gap: 48px;

  border-radius: 16px;
  background: rgba(0, 0, 0, 0.64);
  box-shadow: 0px 109.54321px 82.15741px 0px rgba(0, 0, 0, 0.05),
    1px 1px 5px 1px rgba(255, 255, 255, 0.32) inset;
  backdrop-filter: blur(8px);
`;

export const ImageContainer = styled.div`
  border-radius: 8px;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 62.88%,
    rgba(0, 0, 0, 0.64) 90.08%
  );
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.32);
  overflow: hidden;
  position: relative;

  img {
    object-fit: cover;
  }
`;

export const IntroTitle = styled.h1`
  font-size: 32px;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 0.96px;
  margin-bottom: 16px;
`;

export const Description = styled.p`
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 48px;
`;

export const InfoLabel = styled.p`
  color: ${({ theme }) => theme.colors.neutral50};
  font-size: 14px;
  font-weight: 400;
  width: fit-content;
  text-transform: uppercase;

  &::after {
    content: '';
    display: block;
    width: 100%;
    height: 2px;
    margin-top: 6px;
    background: ${({ theme }) => theme.gradients.divider};
  }
`;

export const Divider = styled.hr`
  border: 0;
  height: 2px;
  margin: 32px 0;
  background: ${({ theme }) => theme.gradients.divider};
`;

export const FieldsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 48px;
`;

export const HaveAccount = styled.p`
  text-align: center;
  font-size: 14px;
  font-weight: 400;
  margin-top: 24px;

  a {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: underline;
  }
`;
