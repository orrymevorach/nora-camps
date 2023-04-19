import PageBuilder from "@/components/shared/page-builder";
import { getEntryIdsFromPageBuilder } from "@/lib/contentful";
import { PAGES, getEntryDataFromEntryIds } from "@/utils/contentful";
import Wrapper from "@/components/shared/wrapper/wrapper";
import SEO from "@/components/shared/seo/seo";

export default function ShippingAndPolicies({ entries = [] }) {
  return (
    <>
      <SEO title="Shipping & Policies" />
      <Wrapper size="small">
        <PageBuilder entries={entries} page={PAGES.SHIPPING_AND_POLICIES} />
      </Wrapper>
    </>
  );
}

export async function getStaticProps() {
  const entryIds = await getEntryIdsFromPageBuilder({
    page: PAGES.SHIPPING_AND_POLICIES,
  });
  const entries = await getEntryDataFromEntryIds({ entryIds });
  return {
    props: {
      entries,
    },
  };
}
