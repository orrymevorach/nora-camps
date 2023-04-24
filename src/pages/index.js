import PageBuilder from "@/components/shared/page-builder";
import SEO from "@/components/shared/seo";
import {
  getAllPaintings,
  getEntryIdsFromPageBuilder,
  getAllCollections,
} from "@/lib/contentful";
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
  const allPaintings = await getAllPaintings();
  const allCollections = await getAllCollections();
  const combineResponsesInArray = [...allCollections, ...allPaintings];

  return {
    props: {
      entries,
      combineResponsesInArray,
    },
  };
}
