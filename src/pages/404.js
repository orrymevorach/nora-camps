import PageNotFoundPage from "@/components/page-not-found-page";
import { getAllCollections, getAllPaintings } from "@/lib/contentful";

export default function PageNotFound() {
  return <PageNotFoundPage />;
}

export default async function getStaticProps() {
  const collectionsResponse = await getAllCollections();
  const allPaintings = await getAllPaintings();
  const combineResponsesInArray = [...collectionsResponse, ...allPaintings];

  return {
    props: {
      combineResponsesInArray,
    }
  }
}

