import {
  getPaintingByName,
  getAllPaintings,
  getCollectionByName,
} from '@/lib/contentful';
import PrimaryButton from '@/components/shared/primary-button';
import PaintingInfoTemplate from '@/components/shared/painting-info-template/painting-info-template';
import { PAGES } from '@/utils/contentful';
import Wrapper from '@/components/shared/wrapper/wrapper';
import SEO from '@/components/shared/seo/seo';
import { capitalizeFirstLetterOfEachWord } from '@/utils/string-utils';

export default function Painting({ paintingData = {}, collectionData }) {
  // The collectionData prop has all the paintings in this collection. Use this data for the reccommended paintings section
  return (
    <>
      <SEO title={`${capitalizeFirstLetterOfEachWord(paintingData?.name)}`} />
      <Wrapper>
        <PrimaryButton isLeftArrow href="/paintings" hasBorder={false} isBold>
          Back to Painting Page
        </PrimaryButton>
        <PaintingInfoTemplate
          {...paintingData}
          page={PAGES.PAINTING_SPECIFIC_PAGE}
        />
      </Wrapper>
    </>
  );
}

export async function getStaticProps({ params }) {
  // this fixes the deployment, since there are no params on build time
  if (params.slug === 'undefined')
    return {
      props: {},
    };
  const paintingResponse = await getPaintingByName({ name: params.slug });
  const collectionResponse = await getCollectionByName({
    name: paintingResponse.collection,
  });

  // In case the collection field is empty, the page won't break
  if (!collectionResponse) {
    return {
      props: {
        paintingData: paintingResponse,
      },
    };
  }
  return {
    props: {
      paintingData: paintingResponse,
      collectionData: collectionResponse,
    },
  };
}

export async function getStaticPaths() {
  const allPaintings = await getAllPaintings();

  return {
    paths: allPaintings.map(({ name }) => `/painting/${name}`),
    fallback: true,
  };
}
