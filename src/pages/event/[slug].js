import { getEventByName, getAllEvents } from '@/lib/contentful';
import Head from 'next/head';
import PaintingInfoTemplate from '@/components/shared/painting-info-template';
import { capitalizeFirstLetterOfEachWord } from '@/utils/string-utils';

export default function Event({ eventData }) {
  return (
    <>
      <Head>
        <title>
          Nora Camps | Event | {capitalizeFirstLetterOfEachWord(eventData.name)}
        </title>
      </Head>
      <PaintingInfoTemplate {...eventData} />
    </>
  );
}

export async function getStaticProps({ params }) {
  // this fixes the deployment, since there are no params on build time
  if (params.slug === 'undefined')
    return {
      props: {},
    };

  const eventData = await getEventByName({ name: params.slug });

  return {
    props: {
      eventData,
    },
  };
}

export async function getStaticPaths() {
  const allEvents = await getAllEvents();

  return {
    paths: allEvents.map(({ name }) => `/event/${name}`),
    fallback: true,
  };
}
