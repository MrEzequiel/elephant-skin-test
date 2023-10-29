import * as S from './styles';

export default function MainContainer({
  children
}: {
  children: React.ReactNode;
}) {
  return <S.Container>{children}</S.Container>;
}
