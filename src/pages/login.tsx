import type { ReactElement } from 'react';
import type { NextPageWithLayout } from './_app';
import FullscreenVideo from '@/components/FullscreenVideo';
import Link from 'next/link';

const Page: NextPageWithLayout = () => {
  return <Link href="home">home</Link>;
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
