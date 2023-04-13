import PageBuilder from '@/components/shared/page-builder';
import { getEntryIdsFromPageBuilder } from '@/lib/contentful';
import { PAGES, getEntryDataFromEntryIds } from '@/utils/contentful';
import Head from 'next/head';

export default function Home({ entries = [] }) {
  return (
    <>
      <Head>
        <title>Nora Camps</title>
      </Head>
      <PageBuilder entries={entries} page={PAGES.HOME} />
    </>
  );
}

export async function getStaticProps() {
  const entryIds = await getEntryIdsFromPageBuilder({ page: PAGES.HOME });
  const entries = await getEntryDataFromEntryIds({ entryIds });
  return {
    props: {
      entries,
    },
  };
}
