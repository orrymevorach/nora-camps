import PageBuilder from "@/components/shared/page-builder";
import SEO from "@/components/shared/seo/seo";
import { getEntryIdsFromPageBuilder } from "@/lib/contentful";
import { PAGES, getEntryDataFromEntryIds } from "@/utils/contentful";

export default function SpecialProjects({ entries = [] }) {
  return (
    <>
      <SEO title="Special Projects" />
      <PageBuilder entries={entries} page={PAGES.SPECIAL_PROJECTS} />
    </>
  );
}

export async function getStaticProps() {
  const entryIds = await getEntryIdsFromPageBuilder({
    page: PAGES.SPECIAL_PROJECTS,
  });
  const entries = await getEntryDataFromEntryIds({ entryIds });
  return {
    props: {
      entries,
    },
  };
}
