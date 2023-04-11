import {
  getCollectionByEntryId,
  getHeroImage,
  getGallery,
  getSpecialProjectsTopSection,
} from '@/lib/contentful';

export const PAGES = {
  HOME: 'Home Page',
  PAINTINGS: 'Paintings Page',
  EXHIBITIONS: 'Exhibitions Page',
  SPECIAL_PROJECTS: 'Special Projects Page',
};

export const CONTENT_MODELS = {
  HERO_IMAGE: 'HeroImage',
  COLLECTION: 'Collection',
  GALLERY: 'Gallery',
  EVENT: 'Event',
  PAINTING: 'Painting',
  SPECIAL_PROJECTS_TOP_SECTION: 'SpecialProjectsTopSection',
  SPECIAL_PROJECT: 'SpecialProject',
};

export const getEntryDataFromEntryIds = async ({ entryIds }) => {
  const { HERO_IMAGE, COLLECTION, GALLERY, SPECIAL_PROJECTS_TOP_SECTION } =
    CONTENT_MODELS;
  const mapContentModelToQuery = {
    [HERO_IMAGE]: getHeroImage,
    [COLLECTION]: getCollectionByEntryId,
    [GALLERY]: getGallery,
    [SPECIAL_PROJECTS_TOP_SECTION]: getSpecialProjectsTopSection,
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
