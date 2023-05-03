import PageBuilder from "@/components/shared/page-builder";
import SEO from "@/components/shared/seo";
import {
  getEntryIdsFromPageBuilder,
  getCollectionsAndPaintings,
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
  const { paintingsAndCollections } = await getCollectionsAndPaintings();

  return {
    props: {
      entries,
      paintingsAndCollections,
    },
  };
}
