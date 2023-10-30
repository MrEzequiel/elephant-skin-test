import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import * as S from './styles';

export default function FullscreenImage({
  src,
  alt
}: {
  src: string;
  alt: string;
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return createPortal(
    <S.ImageStyles src={src} alt={alt} fill />,
    document.body
  );
}
