import NewsletterPage from '@/components/newsletter-page/newsletter-page';
import Head from 'next/head';
import { getAllCollections, getAllPaintings } from '@/lib/contentful';

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

export async function getStaticProps() {
  const collectionsResponse = await getAllCollections();
  const allPaintings = await getAllPaintings();
  const combineResponsesInArray = [...collectionsResponse, ...allPaintings];

  return {
    props: {
      combineResponsesInArray,
    }
  }
}
