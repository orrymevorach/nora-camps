import { client } from "@/graphql/apollo-config";
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
  GET_RICH_TEXT_BY_ENTRY_ID,
  GET_ALL_COLLECTIONS,
  GET_ABOUT_PAGE_TOP_SECTION,
  GET_SPECIAL_PROJECT_WITH_VIDEO,
  GET_ANNOUNCEMENT_BAR,
} from "@/graphql/queries";

export const getEntryIdsFromPageBuilder = async ({ page = "" }) => {
  const { data } = await client.query({
    query: GET_PAGE_ENTRIES,
    variables: { page },
  });
  const hasEntries = data.pageBuilderCollection.items.length > 0;
  if (!hasEntries) return;
  return data.pageBuilderCollection.items[0].componentsCollection.items;
};

export const getHeroImage = async ({ entryId = "" }) => {
  const { data } = await client.query({
    query: GET_HERO_IMAGE,
    variables: { entryId },
  });
  return data.heroImageCollection.items[0];
};

export const getCollectionByName = async ({ name = "" }) => {
  const { data } = await client.query({
    query: GET_COLLECTION_BY_NAME,
    variables: { name },
  });
  return data.collectionCollection.items[0];
};

export const getAllCollections = async () => {
  const {
    data: { collectionGalleryCollection },
  } = await client.query({
    query: GET_ALL_COLLECTIONS,
  });
  return collectionGalleryCollection.items[0].itemsCollection.items;
};

export const getGallery = async ({ entryId = "" }) => {
  try {
    const { data } = await client.query({
      query: GET_GALLERY,
      variables: { entryId },
    });
    const galleryData = data.gallery.itemsCollection;
    const copyOfGalleryData = { ...galleryData }; // making a copy so component data items can be mutated
    const filteredItems = copyOfGalleryData.items.filter(item => !!item); // filtering null items (deleted items, or if in in draft status)
    copyOfGalleryData.items = filteredItems;

    return copyOfGalleryData;
  } catch (error) {
    console.error("error", error);
  }
};

export const getAllPaintings = async () => {
  try {
    const { data } = await client.query({
      query: GET_ALL_PAINTINGS,
    });
    return data.paintingCollection.items;
  } catch (error) {
    console.error("error", error);
  }
};

export const getCollectionsAndPaintings = async () => {
  try {
    const {
      data: { collectionGalleryCollection },
    } = await client.query({
      query: GET_ALL_COLLECTIONS,
    });
    const {
      data: { paintingCollection },
    } = await client.query({
      query: GET_ALL_PAINTINGS,
    });

    return {
      paintingsAndCollections: [
        ...collectionGalleryCollection.items[0].itemsCollection.items,
        ...paintingCollection.items,
      ],
    };
  } catch (error) {
    console.error("error", error);
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
    console.error("error", error);
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
    console.error("error", error);
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
    console.error("error", error);
  }
};

export const getAllEvents = async () => {
  try {
    const { data } = await client.query({
      query: GET_ALL_EVENTS,
    });
    return data.eventCollection.items;
  } catch (error) {
    console.error("error", error);
  }
};

export const getSpecialProjectsTopSection = async ({ entryId = "" }) => {
  try {
    const { data } = await client.query({
      query: GET_SPECIAL_PROJECTS_TOP_SECTION,
      variables: { entryId },
    });
    return data.specialProjectsTopSection;
  } catch (error) {
    console.error("error", error);
  }
};

export const getSpecialProjectWithVideo = async ({ entryId = "" }) => {
  try {
    const { data } = await client.query({
      query: GET_SPECIAL_PROJECT_WITH_VIDEO,
      variables: { entryId },
    });
    return data.specialProjectWithVideo;
  } catch (error) {
    console.error("error", error);
  }
};

export const getRichTextByEntryId = async ({ entryId = "" }) => {
  try {
    const { data } = await client.query({
      query: GET_RICH_TEXT_BY_ENTRY_ID,
      variables: { entryId },
    });
    return data.contentTypeRichText;
  } catch (error) {
    console.error("error", error);
  }
};

export const getAboutPageTopSection = async ({ entryId = "" }) => {
  try {
    const { data } = await client.query({
      query: GET_ABOUT_PAGE_TOP_SECTION,
      variables: { entryId },
    });
    return data.aboutPageTopSection;
  } catch (error) {
    console.error("error", error);
  }
};

export const getAnnouncementBar = async () => {
  try {
    const { data } = await client.query({
      query: GET_ANNOUNCEMENT_BAR,
      fetchPolicy: "no-cache", // ensuring we always get the most up to date announcement bar (in case it gets updated while users have the site open)
    });
    if (!data.announcementBarCollection.items.length) return null;
    return data.announcementBarCollection.items[0];
  } catch (error) {
    console.error("error", error);
    return;
  }
};
