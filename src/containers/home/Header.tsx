import Image from 'next/image';
import * as S from './styles';

export default function Header() {
  return (
    <S.HeaderContainer>
      <S.NavigationContainer>
        <S.NavigationItem $isActive>home</S.NavigationItem>
        <S.NavigationItem>project</S.NavigationItem>
        <S.NavigationItem>sales</S.NavigationItem>
      </S.NavigationContainer>

      <S.UserContainer>
        <S.UserProfileImage
          src="/profile.jpeg"
          alt="profile"
          width={48}
          height={48}
          quality={100}
        />
        <Image
          src="/logo-small.png"
          alt="logo"
          width={226}
          height={32}
          objectFit="cover"
        />
      </S.UserContainer>
    </S.HeaderContainer>
  );
}
