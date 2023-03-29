import PageBuilder from '@/components/shared/page-builder';
import { getEntryIdsFromPageBuilder } from '@/lib/contentful';
import { PAGES, getEntryDataFromEntryIds } from '@/utils/contentful';
import Head from 'next/head';

export default function Home({ entries = [] }) {
  return (
    <>
      <Head>
        <title>Nora Camps | Exhibitions</title>
      </Head>
      <PageBuilder entries={entries} />
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
