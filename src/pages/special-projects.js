import PageBuilder from "@/components/shared/page-builder";
import SEO from "@/components/shared/seo/seo";
import Wrapper from "@/components/shared/wrapper/wrapper";
import {
  getEntryIdsFromPageBuilder,
  getAllCollections,
  getAllPaintings,
} from "@/lib/contentful";
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
  const allCollections = await getAllCollections();
  const allPaintings = await getAllPaintings();
  const combineResponsesInArray = [...allCollections, ...allPaintings];

  return {
    props: {
      entries,
      combineResponsesInArray,
    },
  };
}
