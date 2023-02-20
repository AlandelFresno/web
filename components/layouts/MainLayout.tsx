import Head from 'next/head';
import { FC } from 'react';
import Footer from '../ui/Footer';
import Navbar from '../ui/Navbar';

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
      <nav>
        <Navbar />
      </nav>
      <main style={{ overflow: 'hidden' }}>{children}</main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

