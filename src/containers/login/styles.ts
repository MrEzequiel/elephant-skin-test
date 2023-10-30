import Image from 'next/image';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 48px;
  gap: 32px;
  flex: 1;
`;

export const CardContainer = styled.div`
  max-width: 1034px;
  width: 100%;
  display: grid;
  grid-template-columns: 4fr 3fr;
  padding: 48px;
  gap: 48px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    grid-template-rows: 150px 1fr;
  }

  border-radius: 16px;
  background: rgba(0, 0, 0, 0.64);
  box-shadow: 0px 109.54321px 82.15741px 0px rgba(0, 0, 0, 0.05),
    1px 1px 5px 1px rgba(255, 255, 255, 0.32) inset;
  backdrop-filter: blur(8px);

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

export const ImageContainer = styled.div`
  border-radius: 8px;

  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.32);
  overflow: hidden;
  position: relative;

  img {
    object-fit: cover;

    @media (max-width: 1024px) {
      object-position: bottom;
    }
  }

  &::after {
    position: absolute;
    content: '';
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 62.88%,
      rgba(0, 0, 0, 0.64) 90.08%
    );
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 1;
  }

  @media (max-width: 1024px) {
    img {
      object-position: bottom;
    }

    &::after {
      background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0) 0.88%,
        rgba(0, 0, 0, 0.64) 36.08%
      );
    }
  }
`;

export const ImageLogo = styled(Image)`
  position: absolute;
  z-index: 2;
  bottom: 56px;
  right: 50%;
  transform: translateX(50%);

  @media (max-width: 1024px) {
    bottom: 16px;
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

export const ButtonIconInput = styled.button`
  cursor: pointer;
  border: 0;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  animation: fadeIn 300ms ease;
`;
