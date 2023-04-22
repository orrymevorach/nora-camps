import PageBuilder from "@/components/shared/page-builder";
import SEO from "@/components/shared/seo/seo";
import Wrapper from "@/components/shared/wrapper/wrapper";
import { getEntryIdsFromPageBuilder, getAllCollections, getAllPaintings } from "@/lib/contentful";
import { PAGES, getEntryDataFromEntryIds } from "@/utils/contentful";

export default function SpecialProjects({ entries = [] }) {
  return (
    <>
      <SEO title="Special Projects" />
      <Wrapper>
        <PageBuilder entries={entries} page={PAGES.SPECIAL_PROJECTS} />
      </Wrapper>
    </>
  );
}

export async function getStaticProps() {
  const entryIds = await getEntryIdsFromPageBuilder({
    page: PAGES.SPECIAL_PROJECTS,
  });
  const entries = await getEntryDataFromEntryIds({ entryIds });
  const collectionsResponse = await getAllCollections();
  const paintingsResponse = await getAllPaintings();
  const combineResponsesInArray = [...collectionsResponse, ...paintingsResponse];
  
  return {
    props: {
      entries,
      combineResponsesInArray,
    },
  };
}
