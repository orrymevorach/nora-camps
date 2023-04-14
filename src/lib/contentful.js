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
  GET_PAINTING_BY_ENTRY_ID,
} from '@/graphql/queries';

export const getEntryIdsFromPageBuilder = async ({ page = '' }) => {
  const { data } = await client.query({
    query: GET_PAGE_ENTRIES,
    variables: { page },
  });
  const hasEntries = data.pageBuilderCollection.items.length > 0;
  if (!hasEntries) return;
  return data.pageBuilderCollection.items[0].componentsCollection.items;
};

export const getHeroImage = async ({ entryId = '' }) => {
  const { data } = await client.query({
    query: GET_HERO_IMAGE,
    variables: { entryId },
  });
  return data.heroImageCollection.items[0];
};

export const getCollectionByEntryId = async ({ entryId = '' }) => {
  const { data } = await client.query({
    query: GET_COLLECTION_BY_ENTRY_ID,
    variables: { entryId },
  });
  return data.collection;
};

export const getCollectionByName = async ({ name = '' }) => {
  const { data } = await client.query({
    query: GET_COLLECTION_BY_NAME,
    variables: { name },
  });
  return data.collectionCollection.items[0];
};

export const getGallery = async ({ entryId = '' }) => {
  try {
    const { data } = await client.query({
      query: GET_GALLERY,
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
      variables: { name },
    });
    return data.paintingCollection.items[0];
  } catch (error) {
    console.error('error', error);
  }
};

export const getPaintingByEntryId = async ({ entryId }) => {
  try {
    const { data } = await client.query({
      query: GET_PAINTING_BY_ENTRY_ID,
      variables: { entryId },
    });
    return data.painting;
  } catch (error) {
    console.error('error', error);
  }
};

export const getEventByName = async ({ name }) => {
  try {
    const { data } = await client.query({
      query: GET_EVENT_BY_NAME,
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
      variables: { entryId },
    });
    return data.specialProjectsTopSection;
  } catch (error) {
    console.error('error', error);
  }
};
