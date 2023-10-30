import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import * as S from './styles';

export default function FullscreenVideo({
  src = 'home.mp4'
}: {
  src?: string;
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return createPortal(
    <S.Video autoPlay muted loop>
      <source src={src} type="video/mp4" />
    </S.Video>,
    document.body
  );
}
