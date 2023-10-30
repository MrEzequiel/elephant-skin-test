import React, { useState } from 'react';
import * as S from './styles';

export default function Tooltip({
  content,
  delay = 200,
  children
}: {
  content: string;
  delay?: number;
  children?: React.ReactNode;
}) {
  let timeout: NodeJS.Timeout;
  const [active, setActive] = useState(false);

  const showTooltip = () => {
    timeout = setTimeout(() => {
      setActive(true);
    }, delay);
  };

  const hideTooltip = () => {
    clearInterval(timeout);
    setActive(false);
  };

  return (
    <S.TooltipContainer onMouseEnter={showTooltip} onMouseLeave={hideTooltip}>
      {children}
      <S.TooltipText $show={active}>{content}</S.TooltipText>
    </S.TooltipContainer>
  );
}
