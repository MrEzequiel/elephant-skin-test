import styled from 'styled-components';

export const RightWrapper = styled.div`
  display: flex;
  height: 100%;
  width: fit-content;
`;

export const SideMenuContainer = styled.aside`
  position: relative;
  height: 100%;
  width: fit-content;
  padding: 32px 36px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const VerticalDivider = styled.div`
  border: 0;
  width: 2px;
  height: 100%;
  background: ${({ theme }) => theme.gradients.verticalDivider};
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

interface StepsContainerProps {
  $show: boolean;
}

export const StepsContainer = styled.div<StepsContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  opacity: ${({ $show }) => ($show ? 1 : 0)};
  visibility: ${({ $show }) => ($show ? 'visible' : 'hidden')};
  transition: opacity 300ms ease, visibility 300ms ease;
`;

export const StepItem = styled.button`
  cursor: pointer;
  background-color: transparent;
  padding: 6px;
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;
  transition: background 300ms ease, box-shadow 300ms ease;

  &:hover {
    backdrop-filter: blur(8px);
    background: rgba(255, 255, 255, 0.08);
    box-shadow: 1px 1px 5px 1px rgba(255, 255, 255, 0.8) inset,
      0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  }
`;

export const Divider = styled.hr`
  border: 0;
  height: 36px;
  width: 1px;
  border: 1px solid rgba(255, 255, 255, 0.32);
  border-style: dashed;
`;

export const ActionSideBarContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 32px 36px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;
`;

export const ActionSideBarItem = styled.button`
  cursor: pointer;
  opacity: 0.5;
  transition: opacity 300ms ease;

  &:hover {
    opacity: 1;
    text-shadow: 0 0 30px #00acff;
  }
`;
