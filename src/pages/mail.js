import NewsletterPage from '@/components/newsletter-page/newsletter-page';
import Head from 'next/head';

export default function Mail() {
  return (
    <>
      <Head>
        <title>Nora Camps | Email List</title>
      </Head>
      <NewsletterPage />
    </>
  );
}
