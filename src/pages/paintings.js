import PageBuilder from '@/components/shared/page-builder';
import SEO from '@/components/shared/seo/seo';
import { useFilterByCollection } from '@/hooks/useFilterByCollection';
import { getAllPaintings, getEntryIdsFromPageBuilder } from '@/lib/contentful';
import { PAGES, getEntryDataFromEntryIds } from '@/utils/contentful';

export default function Paintings({ entries = [], allPaintings }) {
  const gallery = useFilterByCollection({ allPaintings, entries });
  return (
    <>
      <SEO title="Paintings" />
      <PageBuilder entries={gallery} page={PAGES.PAINTINGS} />
    </>
  );
}

export async function getStaticProps() {
  const entryIds = await getEntryIdsFromPageBuilder({ page: PAGES.PAINTINGS });
  const entries = await getEntryDataFromEntryIds({ entryIds });
  const allPaintings = await getAllPaintings();
  return {
    props: {
      entries,
      allPaintings,
    },
  };
}
