import type { ReactElement } from 'react';
import type { NextPageWithLayout } from './_app';
import FullscreenVideo from '@/components/FullscreenVideo';
import MainContainer from '@/components/MainContainer';
import * as S from '@/containers/login/styles';
import Image from 'next/image';
import Button from '@/components/Button';
import LoginForm from '@/containers/login/LoginForm';
import Link from 'next/link';

const Page: NextPageWithLayout = () => {
  return (
    <MainContainer>
      <S.Container>
        <S.CardContainer>
          <S.ImageContainer>
            <Image src="/login-cover.jpeg" alt="logo" fill priority />
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
