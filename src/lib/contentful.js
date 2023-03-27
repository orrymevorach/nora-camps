import { client } from '@/graphql/apollo-config';
import {
  GET_COLLECTION,
  GET_HERO_IMAGE,
  GET_PAGE_ENTRIES,
} from '@/graphql/queries';

export const getEntryIdsFromPageBuilder = async ({ page = '' }) => {
  const { data } = await client.query({
    query: GET_PAGE_ENTRIES,
    variables: { page },
  });
  return data.pageBuilderCollection.items[0].componentsCollection.items;
};

export const getHeroImage = async ({ entryId = '' }) => {
  const { data } = await client.query({
    query: GET_HERO_IMAGE,
    variables: { entryId },
  });
  return data.heroImageCollection.items[0];
};

export const getCollection = async ({ entryId = '' }) => {
  const { data } = await client.query({
    query: GET_COLLECTION,
    variables: { entryId },
  });
  return data.collectionCollection.items[0];
};
