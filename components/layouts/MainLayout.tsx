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
        <meta name="og:image" content="https://i.imgur.com/rDLFkh0.png" />
        <meta name="og:url" content="boolers.net" />
        <meta name="og:type" content="website" />
        <meta name="og:site_name" content="Boolers" />
        <meta name="og:locale" content="en_US" />
        <link rel="icon" href="/favicon.ico" />
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

