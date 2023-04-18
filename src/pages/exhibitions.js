import PageBuilder from "@/components/shared/page-builder";
import SEO from "@/components/shared/seo/seo";
import { getEntryIdsFromPageBuilder } from "@/lib/contentful";
import { PAGES, getEntryDataFromEntryIds } from "@/utils/contentful";

export default function Home({ entries = [] }) {
  return (
    <>
      <SEO title="Exhibitions" />
      <PageBuilder entries={entries} page={PAGES.EXHIBITIONS} />
    </>
  );
}

export async function getStaticProps() {
  const entryIds = await getEntryIdsFromPageBuilder({
    page: PAGES.EXHIBITIONS,
  });
  const entries = await getEntryDataFromEntryIds({ entryIds });
  return {
    props: {
      entries,
    },
  };
}
