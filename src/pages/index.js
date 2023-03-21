import Head from 'next/head';
import { Inter } from 'next/font/google';
import Nav from 'components/shared/nav';

export default function Home() {
  return (
    <>
      <Head>
        <title>Nora Camps</title>
      </Head>
      <Nav />
    </>
  );
}
