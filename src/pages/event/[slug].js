import { getEventByName, getAllEvents } from '@/lib/contentful';
import Head from 'next/head';
import PaintingInfoTemplate from '@/components/shared/painting-info-template/painting-info-template';
import PrimaryButton from '@/components/shared/primary-button';
import { PAGES } from '@/utils/contentful';

export default function Event({ eventData }) {
  return (
    <>
      <Head>
        <title>Nora Camps | Event</title>
      </Head>
      <PrimaryButton isLeftArrow href="/exhibitions" hasBorder={false} isBold>
        Back to Event Page
      </PrimaryButton>
      <PaintingInfoTemplate {...eventData} page={PAGES.EVENT_SEPCIFIC_PAGE} />
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
