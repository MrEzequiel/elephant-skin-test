import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import * as S from './styles';

export default function FullscreenVideo() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return createPortal(
    <S.Video autoPlay muted loop>
      <source src="home.mp4" type="video/mp4" />
    </S.Video>,
    document.body
  );
}
