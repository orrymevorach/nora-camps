import PageBuilder from "@/components/shared/page-builder";
import SEO from "@/components/shared/seo";
import { getAllPaintings, getEntryIdsFromPageBuilder, getAllCollections } from "@/lib/contentful";
import { PAGES, getEntryDataFromEntryIds } from "@/utils/contentful";

export default function Home({ entries = [] }) {
  return (
    <>
      <SEO />
      <PageBuilder entries={entries} page={PAGES.HOME} />
    </>
  );
}

export async function getStaticProps() {
  const entryIds = await getEntryIdsFromPageBuilder({ page: PAGES.HOME });
  const entries = await getEntryDataFromEntryIds({ entryIds });
  const collectionsResponse = await getAllCollections();
  const allPaintings = await getAllPaintings();
  const combineResponsesInArray = [...collectionsResponse, ...allPaintings];
  
  return {
    props: {
      entries,
      combineResponsesInArray,
    },
  };
}
