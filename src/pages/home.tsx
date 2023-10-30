import { useState, type ReactElement } from 'react';
import type { NextPageWithLayout } from './_app';
import FullscreenVideo from '@/components/FullscreenVideo';
import MainContainer from '@/components/MainContainer';
import * as S from '@/containers/home/styles';
import { Add, Minus } from '@/components/Icon';
import IconButton from '@/components/IconButton';
import Steps from '@/containers/home/Steps';
import ActionSideBar from '@/containers/home/ActionSideBar';
import Header from '@/containers/home/Header';

const Page: NextPageWithLayout = () => {
  const [tourStarted, setTourStarted] = useState(false);

  return (
    <MainContainer>
      <S.PageContainer>
        <S.RightWrapper>
          <S.SideMenuContainer>
            <Steps show={!tourStarted} />
            <ActionSideBar />
          </S.SideMenuContainer>

          <S.VerticalDivider>
            <IconButton
              icon={tourStarted ? <Minus size="small" /> : <Add size="small" />}
              onClick={() => setTourStarted(prev => !prev)}
            />
          </S.VerticalDivider>
        </S.RightWrapper>

        <S.MainPageContainer>
          <Header />
        </S.MainPageContainer>
      </S.PageContainer>
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
