import CollectionsDropDown from "@/components/paintings-page/collections-drop-down/collections-drop-down";
import PageBuilder from "@/components/shared/page-builder";
import SEO from "@/components/shared/seo/seo";
import { useFilterByCollection } from "@/hooks/useFilterByCollection";
import {
  getAllCollections,
  getEntryIdsFromPageBuilder,
  getCollectionsAndPaintings,
} from "@/lib/contentful";
import { PAGES, getEntryDataFromEntryIds } from "@/utils/contentful";

export default function Paintings({ entries = [], collections = [] }) {
  const gallery = useFilterByCollection({
    entries,
  });

  return (
    <>
      <SEO title="Paintings" />
      <CollectionsDropDown collections={["All", ...collections]} />
      <PageBuilder entries={gallery} page={PAGES.PAINTINGS} />
    </>
  );
}

export async function getStaticProps() {
  const entryIds = await getEntryIdsFromPageBuilder({ page: PAGES.PAINTINGS });
  const entries = await getEntryDataFromEntryIds({ entryIds });
  const allCollections = await getAllCollections();
  const collections = allCollections.map(({ name }) => name);
  const { paintingsAndCollections } = await getCollectionsAndPaintings();
  return {
    props: {
      entries,
      collections,
      paintingsAndCollections,
    },
  };
}
