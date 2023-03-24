import PageBuilder from '@/components/shared/page-builder';
import { getEntryIdsFromPageBuilder } from '@/lib/contentful';
import { PAGES, getEntryDataFromEntryIds } from '@/utils/contentful';
import Head from 'next/head';

export default function Home({ entries = [] }) {
  // Code review notes:

  // the "entries" prop gets populated by getStaticProps, the function at the bottom of this file
  // Entries will return an array of data that we can use to populate the UI components
  // An example of the entries data is:
  // [
  //   {
  //     backgroundImage: {
  //       url: 'https://images.ctfassets.net/t2nx18naire9/5xXJX4QZ…45fe8eff8905c589e6776d88/IMG_Love-Me-Some-3_1.jpg',
  //       description: 'Background Image',
  //     },
  //     contentModel: 'HeroImage',
  //     description: { json: {} },
  //     heading: 'Nora Camps',
  //   },
  // ];

  return (
    <>
      <Head>
        <title>Nora Camps</title>
      </Head>
      <PageBuilder entries={entries} />
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
