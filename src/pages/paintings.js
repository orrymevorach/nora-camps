import PageBuilder from '@/components/shared/page-builder';
import { useFilterByCollection } from '@/hooks/useFilterByCollection';
import { getAllPaintings, getEntryIdsFromPageBuilder } from '@/lib/contentful';
import { PAGES, getEntryDataFromEntryIds } from '@/utils/contentful';
import Head from 'next/head';

export default function Paintings({ entries = [], allPaintings }) {
  const gallery = useFilterByCollection({ allPaintings, entries });
  return (
    <>
      <Head>
        <title>Nora Camps | Paintings</title>
      </Head>
      <PageBuilder entries={gallery} />
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
