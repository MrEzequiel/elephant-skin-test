import Image from 'next/image';
import styled from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 100%;
  padding-left: 76px;
  gap: 76px;
  position: relative;
`;

export const TourTextContainer = styled.div`
  flex-shrink: 0;
  @keyframes showUp {
    0% {
      opacity: 0;
      transform: translateY(-200%);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  animation: showUp 400ms ease-in-out;
`;

export const TourTitle = styled.h1`
  font-size: 48px;
  font-weight: 400;
  letter-spacing: 0.5px;
  text-transform: uppercase;
`;

export const TourDescription = styled.p`
  font-size: 24px;
  font-weight: 400;
  line-height: normal;
  margin-top: 24px;
  margin-bottom: 56px;
`;

export const CardsContainer = styled.div`
  gap: 24px;

  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const CardContainer = styled.div<{ $isActive: boolean; $index: number }>`
  flex-shrink: 0;
  border-radius: 16px;
  box-shadow: 0px 8px 40px 0px rgba(0, 0, 0, 0.32);
  overflow: hidden;
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: end;
  width: ${({ $isActive }) => ($isActive ? '362px' : '302px')};
  height: ${({ $isActive }) => ($isActive ? '60%' : '50%')};

  &::after {
    content: ' ';
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 67.63%,
      rgba(0, 0, 0, 0.56) 100%
    );
    z-index: -1;
  }
`;

export const ImageCard = styled(Image)`
  width: 100%;
  height: 100%;

  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover;
  z-index: -1;
`;

export const CardTextContainer = styled.div`
  width: 100%;
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CardDescriptionContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const CardDescription = styled.p`
  font-size: 18px;
  font-weight: 400;
  text-transform: uppercase;
  font-weight: 600;
`;

export const PaginationContainer = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 0 28px 34px 0;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

export const Divider = styled.hr`
  height: 1px;
  width: 48px;
  border: 0;
  background: ${({ theme }) => theme.gradients.divider};
`;
