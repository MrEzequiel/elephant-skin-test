import type { ReactElement } from 'react';
import type { NextPageWithLayout } from './_app';
import Image from 'next/image';
import Link from 'next/link';

import FullscreenVideo from '@/components/FullscreenVideo';
import MainContainer from '@/components/MainContainer';
import Button from '@/components/Button';
import * as S from '@/containers/login/styles';
import LoginForm from '@/containers/login/LoginForm';
import Footer from '@/components/Footer';

const Page: NextPageWithLayout = () => {
  return (
    <MainContainer>
      <S.Container>
        <S.CardContainer>
          <S.ImageContainer>
            <Image src="/login-cover.jpeg" alt="project cover" fill priority />
            <S.ImageLogo
              src="/logo.png"
              alt="logo"
              width={220}
              height={130}
              priority
            />
          </S.ImageContainer>

          <div>
            <S.IntroTitle>access the platform</S.IntroTitle>
            <S.Description>
              Access as a spectator by clicking let me in or log in as a broker.
            </S.Description>

            <S.InfoLabel>join as guest</S.InfoLabel>

            <Button style={{ marginTop: '32px' }} $variant="secondary">
              let me in
            </Button>

            <S.Divider />

            <S.InfoLabel style={{ marginBottom: '32px' }}>
              i’m a broker
            </S.InfoLabel>

            <LoginForm />

            <S.HaveAccount>
              Don’t have an account?{' '}
              <Link href="/home">Create new account</Link>
            </S.HaveAccount>
          </div>
        </S.CardContainer>

        <Footer />
      </S.Container>
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
