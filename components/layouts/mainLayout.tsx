import Head from 'next/head';
import { FC } from 'react';

interface Props {
  children: React.ReactNode;
  title: string;
  pageDescription?: string;
}

export const MainLayout: FC<Props> = ({ children, title, pageDescription }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="og:title" content={title} />
        <meta name="description" content={pageDescription} />
        <meta name="og:description" content={pageDescription} />
      </Head>
      <main>{children}</main>
      <footer></footer>
    </>
  );
};
