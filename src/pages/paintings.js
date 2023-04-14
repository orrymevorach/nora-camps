import ContactForm from '@/components/contact-form/contact-form';
import CollectionsDropDown from '@/components/paintings-page/collections-drop-down/collections-drop-down';
import PageBuilder from '@/components/shared/page-builder';
import { getEntryIdsFromPageBuilder } from '@/lib/contentful';
import { PAGES, getEntryDataFromEntryIds } from '@/utils/contentful';
import Head from 'next/head';

export default function Paintings({ entries = [] }) {
  return (
    <>
      <Head>
        <title>Nora Camps | Paintings</title>
      </Head>
      <CollectionsDropDown />
      <PageBuilder entries={entries} />
    </>
  );
}

export async function getStaticProps() {
  const entryIds = await getEntryIdsFromPageBuilder({ page: PAGES.PAINTINGS });
  const entries = await getEntryDataFromEntryIds({ entryIds });
  return {
    props: {
      entries,
    },
  };
}
