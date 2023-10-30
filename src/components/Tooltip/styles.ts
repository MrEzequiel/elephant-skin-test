import styled from 'styled-components';

export const TooltipContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

interface TooltipTextProps {
  $show: boolean;
}

export const TooltipText = styled.div<TooltipTextProps>`
  position: absolute;
  font-size: 16px;
  z-index: 100;
  white-space: nowrap;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.white};
  text-shadow: 0 0 4px ${({ theme }) => theme.colors.white};
  font-weight: 600;

  left: calc(100% + 24px);
  top: 50%;
  transform: translateX(0) translateY(-50%);

  opacity: ${({ $show }) => ($show ? 1 : 0)};
  visibility: ${({ $show }) => ($show ? 'visible' : 'hidden')};
  transform: ${({ $show }) =>
    $show
      ? 'translateX(0) translateY(-50%)'
      : 'translateX(0) translateY(-80%)'};
  transition: opacity 300ms ease, visibility 300ms ease, transform 300ms ease;
`;
