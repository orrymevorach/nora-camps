import PageBuilder from "@/components/shared/page-builder";
import SEO from "@/components/shared/seo/seo";
import Wrapper from "@/components/shared/wrapper/wrapper";
import {
  getEntryIdsFromPageBuilder,
  getCollectionsAndPaintings,
  getAnnouncementBar,
} from "@/lib/contentful";
import { PAGES, getEntryDataFromEntryIds } from "@/utils/contentful";

export default function Home({ entries = [] }) {
  return (
    <>
      <SEO title="Exhibitions" />
      <Wrapper>
        <PageBuilder entries={entries} page={PAGES.EXHIBITIONS} />
      </Wrapper>
    </>
  );
}

export async function getStaticProps() {
  const entryIds = await getEntryIdsFromPageBuilder({
    page: PAGES.EXHIBITIONS,
  });
  const entries = await getEntryDataFromEntryIds({ entryIds });
  const { paintingsAndCollections } = await getCollectionsAndPaintings();
  const announcementBar = await getAnnouncementBar();

  return {
    props: {
      entries,
      paintingsAndCollections,
      announcementBar,
    },
  };
}
