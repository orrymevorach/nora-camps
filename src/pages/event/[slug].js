import {
  getEventByName,
  getAllEvents,
  getAllCollections,
  getAllPaintings,
} from "@/lib/contentful";
import PaintingInfoTemplate from "@/components/shared/painting-info-template/painting-info-template";
import PrimaryButton from "@/components/shared/primary-button";
import { PAGES } from "@/utils/contentful";
import Wrapper from "@/components/shared/wrapper/wrapper";
import SEO from "@/components/shared/seo/seo";
import { capitalizeFirstLetterOfEachWord } from "@/utils/string-utils";

export default function Event({ eventData = {} }) {
  return (
    <>
      <SEO title={`${capitalizeFirstLetterOfEachWord(eventData?.name)}}`} />
      <Wrapper>
        <PrimaryButton
          isLeftArrow
          href="/exhibitions"
          hasBorder={false}
          isBold
          smallText
        >
          Back to Event Page
        </PrimaryButton>
        <PaintingInfoTemplate {...eventData} page={PAGES.EVENT_SEPCIFIC_PAGE} />
      </Wrapper>
    </>
  );
}

export async function getStaticProps({ params }) {
  // this fixes the deployment, since there are no params on build time
  if (params.slug === "undefined")
    return {
      props: {},
    };

  const eventData = await getEventByName({ name: params.slug });
  const allCollections = await getAllCollections();
  const allPaintings = await getAllPaintings();
  const combineResponsesInArray = [...allCollections, ...allPaintings];

  return {
    props: {
      eventData,
      combineResponsesInArray,
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
