import type { ReactElement } from 'react';
import type { NextPageWithLayout } from './_app';
import FullscreenVideo from '@/components/FullscreenVideo';
import Link from 'next/link';
import MainContainer from '@/components/MainContainer';
import Image from 'next/image';
import * as S from '@/containers/stand-by/styles';
import IconButton from '@/components/IconButton';
import { ArrowLongRight } from '@/components/Icon';

const Page: NextPageWithLayout = () => {
  return (
    <MainContainer>
      <S.Container>
        <Image src="/logo.png" alt="logo" width={484} height={264} />
        <S.BottomContainer>
          <S.Title>start experience</S.Title>
          <IconButton icon={<ArrowLongRight />}>start</IconButton>
        </S.BottomContainer>
      </S.Container>
      <S.Footer>
        <S.TextFooter>© 2023 Natiivo Miami. All rights reserved.</S.TextFooter>
      </S.Footer>
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
