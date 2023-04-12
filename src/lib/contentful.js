import { client } from '@/graphql/apollo-config';
import {
  GET_ALL_PAINTINGS,
  GET_GALLERY,
  GET_HERO_IMAGE,
  GET_PAGE_ENTRIES,
  GET_PAINTING_BY_NAME,
  GET_COLLECTION_BY_ENTRY_ID,
  GET_COLLECTION_BY_NAME,
  GET_ALL_EVENTS,
  GET_EVENT_BY_NAME,
  GET_SPECIAL_PROJECTS_TOP_SECTION,
} from '@/graphql/queries';

export const getEntryIdsFromPageBuilder = async ({ page = '' }) => {
  const { data } = await client.query({
    query: GET_PAGE_ENTRIES,
    fetchPolicy: 'no-cache',
    variables: { page },
  });
  return data.pageBuilderCollection.items[0].componentsCollection.items;
};

export const getHeroImage = async ({ entryId = '' }) => {
  const { data } = await client.query({
    query: GET_HERO_IMAGE,
    fetchPolicy: 'no-cache',
    variables: { entryId },
  });
  return data.heroImageCollection.items[0];
};

export const getCollectionByEntryId = async ({ entryId = '' }) => {
  const { data } = await client.query({
    query: GET_COLLECTION_BY_ENTRY_ID,
    fetchPolicy: 'no-cache',
    variables: { entryId },
  });
  return data.collection;
};

export const getCollectionByName = async ({ name = '' }) => {
  const { data } = await client.query({
    query: GET_COLLECTION_BY_NAME,
    fetchPolicy: 'no-cache',
    variables: { name },
  });
  return data.collectionCollection.items[0];
};

export const getGallery = async ({ entryId = '' }) => {
  try {
    const { data } = await client.query({
      query: GET_GALLERY,
      fetchPolicy: 'no-cache',
      variables: { entryId },
    });
    return data.gallery.itemsCollection;
  } catch (error) {
    console.error('error', error);
  }
};

export const getAllPaintings = async () => {
  try {
    const { data } = await client.query({
      query: GET_ALL_PAINTINGS,
      fetchPolicy: 'no-cache',
    });
    return data.paintingCollection.items;
  } catch (error) {
    console.error('error', error);
  }
};

export const getPaintingByName = async ({ name }) => {
  try {
    const { data } = await client.query({
      query: GET_PAINTING_BY_NAME,
      fetchPolicy: 'no-cache',
      variables: { name },
    });
    return data.paintingCollection.items[0];
  } catch (error) {
    console.error('error', error);
  }
};

export const getEventByName = async ({ name }) => {
  try {
    const { data } = await client.query({
      query: GET_EVENT_BY_NAME,
      fetchPolicy: 'no-cache',
      variables: { name },
    });
    return data.eventCollection.items[0];
  } catch (error) {
    console.error('error', error);
  }
};

export const getAllEvents = async () => {
  try {
    const { data } = await client.query({
      query: GET_ALL_EVENTS,
      fetchPolicy: 'no-cache',
    });
    return data.eventCollection.items;
  } catch (error) {
    console.error('error', error);
  }
};

export const getSpecialProjectsTopSection = async ({ entryId = '' }) => {
  try {
    const { data } = await client.query({
      query: GET_SPECIAL_PROJECTS_TOP_SECTION,
      fetchPolicy: 'no-cache',
      variables: { entryId },
    });
    return data.specialProjectsTopSection;
  } catch (error) {
    console.error('error', error);
  }
};
