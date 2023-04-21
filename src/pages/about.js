import PageBuilder from "@/components/shared/page-builder";
import SEO from "@/components/shared/seo/seo";
import Wrapper from "@/components/shared/wrapper/wrapper";
import { getEntryIdsFromPageBuilder } from "@/lib/contentful";
import { PAGES, getEntryDataFromEntryIds } from "@/utils/contentful";
import { heading } from "@/components/about-page/about-the-author/about-the-author.module.scss";

export default function About({ entries = [] }) {
  return (
    <>
      <SEO title="About" />
      <Wrapper>
        <p className={heading}>About Nora Camps</p>
        <PageBuilder entries={entries} page={PAGES.ABOUT} />
      </Wrapper>
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
