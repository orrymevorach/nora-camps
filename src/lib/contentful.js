import { GET_HERO_IMAGE, GET_PAGE_ENTRIES } from '@/graphql/queries';

export async function fetchGraphQL({
  query,
  isPreview = false,
  variables = {},
}) {
  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}/environments/${process.env.NEXT_PUBLIC_CONTENTFUL_ENVIRONMENT}?access_token=${process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${
          isPreview
            ? process.env.NEXT_PUBLIC_CONTENTFUL_PREVIEW_ACCESS_TOKEN
            : process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN
        }`,
      },

      body: JSON.stringify({ query, variables }),
    }
  ).then(response => response.json());
}

export const getEntryIdsFromPageBuilder = async ({ page = '' }) => {
  const { data } = await fetchGraphQL({
    query: GET_PAGE_ENTRIES,
    variables: { page },
  });
  return data.pageBuilderCollection.items[0].componentsCollection.items;
};

export const getHeroImage = async ({ entryId = '' }) => {
  const { data } = await fetchGraphQL({
    query: GET_HERO_IMAGE,
    variables: { entryId },
  });
  return data.heroImageCollection.items[0];
};
