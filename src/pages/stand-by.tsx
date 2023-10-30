import type { ReactElement } from 'react';
import type { NextPageWithLayout } from './_app';
import FullscreenVideo from '@/components/FullscreenVideo';
import MainContainer from '@/components/MainContainer';
import Image from 'next/image';
import * as S from '@/containers/stand-by/styles';
import IconButton from '@/components/IconButton';
import { ArrowLongRight } from '@/components/Icon';
import { useRouter } from 'next/navigation';
import Footer from '@/components/Footer';

const Page: NextPageWithLayout = () => {
  const router = useRouter();
  return (
    <MainContainer>
      <S.Container>
        <Image src="/logo.png" alt="logo" width={484} height={264} />
        <S.BottomContainer>
          <S.Title>start experience</S.Title>
          <IconButton
            icon={<ArrowLongRight />}
            onClick={() => router.push('login')}
          />
        </S.BottomContainer>
      </S.Container>
      <S.FooterContainer>
        <Footer />
      </S.FooterContainer>
    </MainContainer>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      {page}
      <FullscreenVideo />
    </>
  );
};

export default Page;
