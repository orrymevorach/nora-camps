import PageBuilder from "@/components/shared/page-builder";
import SEO from "@/components/shared/seo/seo";
import { getEntryIdsFromPageBuilder } from "@/lib/contentful";
import { PAGES, getEntryDataFromEntryIds } from "@/utils/contentful";

export default function About({ entries = [] }) {
  return (
    <>
      <SEO title="About" />
      <PageBuilder entries={entries} page={PAGES.ABOUT} />
    </>
  );
}

export async function getStaticProps() {
  const entryIds = await getEntryIdsFromPageBuilder({ page: PAGES.ABOUT });
  const entries = await getEntryDataFromEntryIds({ entryIds });
  return {
    props: {
      entries,
    },
  };
}
