import Head from 'next/head';
import NewsletterPage from '@/components/newsletter-page/newsletter-page';

export default function Newsletter() {
  return (
    <>
      <Head>
        <title>Nora Camps | Newsletter</title>
      </Head>
      <NewsletterPage />
    </>
  );
}
