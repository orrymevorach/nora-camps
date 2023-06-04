import CollectionsDropDown from "@/components/paintings-page/collections-drop-down/collections-drop-down";
import PageBuilder from "@/components/shared/page-builder";
import SEO from "@/components/shared/seo/seo";
import { useFilterByCollection } from "@/hooks/useFilterByCollection";
import {
  getAllCollections,
  getAllPaintings,
  getEntryIdsFromPageBuilder,
  getCollectionsAndPaintings,
} from "@/lib/contentful";
import { PAGES, getEntryDataFromEntryIds } from "@/utils/contentful";

export default function Paintings({
  entries = [],
  allPaintings,
  collections = [],
}) {
  const gallery = useFilterByCollection({
    allPaintings,
    entries,
  });

  return (
    <>
      <SEO title="Paintings" />
      <CollectionsDropDown collections={collections} />
      <PageBuilder entries={gallery} page={PAGES.PAINTINGS} />
    </>
  );
}

export async function getStaticProps() {
  const entryIds = await getEntryIdsFromPageBuilder({ page: PAGES.PAINTINGS });
  const entries = await getEntryDataFromEntryIds({ entryIds });
  const allPaintings = await getAllPaintings();
  const allCollections = await getAllCollections();
  const collections = allCollections.map(({ name, order }) => {
    return { name, order };
  });
  const { paintingsAndCollections } = await getCollectionsAndPaintings();
  return {
    props: {
      entries,
      allPaintings,
      collections,
      paintingsAndCollections,
    },
  };
}
