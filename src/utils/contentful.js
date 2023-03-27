import { getCollection, getHeroImage } from '@/lib/contentful';

export const PAGES = {
  HOME: 'Home',
};

export const CONTENT_MODELS = {
  HERO_IMAGE: 'HeroImage',
  COLLECTION: 'Collection',
};

export const getEntryDataFromEntryIds = async ({ entryIds }) => {
  const { HERO_IMAGE, COLLECTION } = CONTENT_MODELS;
  const mapContentModelToQuery = {
    [HERO_IMAGE]: getHeroImage,
    [COLLECTION]: getCollection,
  };

  let data = [];
  // Using a for loop because map does not work well with async/await
  for (let i = 0; i < entryIds.length; i++) {
    const entry = entryIds[i];
    const contentModelId = entry.__typename;
    const query = mapContentModelToQuery[contentModelId];
    if (query) {
      const componentData = await query({ entryId: entry.sys.id });
      data.push({
        ...componentData,
        contentModel: contentModelId, // Use this ID to map the data to a corresponding React component
      });
    }
  }
  return data;
};
