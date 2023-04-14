import CollectionsDropDown from '@/components/paintings-page/collections-drop-down/collections-drop-down';
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
      <CollectionsDropDown />
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
