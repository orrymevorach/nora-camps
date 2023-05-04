import NewsletterPage from "@/components/newsletter-page/newsletter-page";
import Head from "next/head";
import { getCollectionsAndPaintings } from "@/lib/contentful";

export default function Newsletter() {
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
  const { paintingsAndCollections } = await getCollectionsAndPaintings();

  return {
    props: {
      paintingsAndCollections,
    },
  };
}
