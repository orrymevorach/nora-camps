import {
  getPaintingByName,
  getAllPaintings,
  getCollectionByName,
  getCollectionsAndPaintings,
} from "@/lib/contentful";
import PrimaryButton from "@/components/shared/primary-button";
import PaintingInfoTemplate from "@/components/shared/painting-info-template/painting-info-template";
import { PAGES } from "@/utils/contentful";
import Wrapper from "@/components/shared/wrapper/wrapper";
import SEO from "@/components/shared/seo/seo";
import { capitalizeFirstLetterOfEachWord } from "@/utils/string-utils";
import { buildRecommendationsList } from "@/utils/array-utils";
import { useRouter } from "next/router";
import Recommendation from "@/components/paintings-page/recommendation/recommendation";

export default function Painting({ paintingData = {}, collectionData }) {
  // The collectionData prop has all the paintings in this collection. Use this data for the reccommended paintings section
  const { query } = useRouter();
  const collectionName = query.collection || "All";
  return (
    <>
      <SEO title={`${capitalizeFirstLetterOfEachWord(paintingData?.name)}`} />
      <Wrapper>
        <PrimaryButton
          isLeftArrow
          href={`/paintings?collection=${collectionName}`}
          hasBorder={false}
          isMedium
          smallText
        >
          Back to Painting Page
        </PrimaryButton>
        <PaintingInfoTemplate
          {...paintingData}
          page={PAGES.PAINTING_SPECIFIC_PAGE}
        />
      </Wrapper>
      <Recommendation collectionData={collectionData} />
    </>
  );
}

export async function getStaticProps({ params }) {
  // this fixes the deployment, since there are no params on build time
  if (params.slug === "undefined")
    return {
      props: {},
    };
  const paintingResponse = await getPaintingByName({ name: params.slug });
  const allPaintings = await getAllPaintings();
  const collectionResponse = await getCollectionByName({
    name: paintingResponse.collection?.name,
  });
  const recommendedPaintings = buildRecommendationsList(
    paintingResponse,
    allPaintings
  );
  const { paintingsAndCollections } = await getCollectionsAndPaintings();

  // In case the collection field is empty, the page won't break
  if (!collectionResponse) {
    return {
      props: {
        paintingData: paintingResponse,
        paintingsAndCollections,
      },
    };
  }

  return {
    props: {
      paintingData: paintingResponse,
      collectionData: recommendedPaintings,
      paintingsAndCollections,
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
