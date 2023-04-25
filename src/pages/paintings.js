import CollectionsDropDown from "@/components/paintings-page/collections-drop-down/collections-drop-down";
import PageBuilder from "@/components/shared/page-builder";
import SEO from "@/components/shared/seo/seo";
import { useFilterByCollection } from "@/hooks/useFilterByCollection";
import {
  getAllCollections,
  getAllPaintings,
  getCollectionByName,
  getEntryIdsFromPageBuilder,
  getCollectionsAndPaintings,
} from "@/lib/contentful";
import { PAGES, getEntryDataFromEntryIds } from "@/utils/contentful";
import { useState } from "react";

export default function Paintings({
  entries = [],
  allPaintings,
  collections = [],
}) {
  const [selectedCollection, setSelectedCollection] = useState("");
  const gallery = useFilterByCollection({
    allPaintings,
    entries,
    selectedCollection,
  });
  return (
    <>
      <SEO title="Paintings" />
      <CollectionsDropDown
        collections={["All", ...collections]}
        setSelectedCollection={setSelectedCollection}
      />
      <PageBuilder entries={gallery} page={PAGES.PAINTINGS} />
    </>
  );
}

export async function getStaticProps() {
  const entryIds = await getEntryIdsFromPageBuilder({ page: PAGES.PAINTINGS });
  const entries = await getEntryDataFromEntryIds({ entryIds });
  const allPaintings = await getAllPaintings();
  const allCollections = await getAllCollections();
  const collections = allCollections.map(({ name }) => name);
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
