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
import { useEffect } from "react";

export const PAINTINGS_SCROLL_POSITION_KEY = "paintings-scroll-position";

export default function Paintings({ entries = [], collections = [] }) {
  const gallery = useFilterByCollection({
    entries,
  });

  // When user hits back button from painting page, restore their scroll position on the paintings page. We use sessionStorage to store the scroll position because it persists across page navigations but is cleared when the tab is closed.
  useEffect(() => {
    const storedScrollPosition = sessionStorage.getItem(
      PAINTINGS_SCROLL_POSITION_KEY
    );

    if (!storedScrollPosition) return;

    sessionStorage.removeItem(PAINTINGS_SCROLL_POSITION_KEY);
    window.requestAnimationFrame(() => {
      window.scrollTo({ top: Number(storedScrollPosition), behavior: "auto" });
    });
  }, []);

  return (
    <>
      <SEO title="Paintings" />
      <CollectionsDropDown collections={["Browse All", ...collections]} />
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
