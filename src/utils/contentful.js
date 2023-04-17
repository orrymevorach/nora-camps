import {
  getCollectionByEntryId,
  getHeroImage,
  getGallery,
  getSpecialProjectsTopSection,
  getPaintingByEntryId,
  getRichTextByEntryId,
  getAboutPageTopSection,
} from '@/lib/contentful';

export const PAGES = {
  HOME: 'Home Page',
  PAINTINGS: 'Paintings Page',
  EXHIBITIONS: 'Exhibitions Page',
  SPECIAL_PROJECTS: 'Special Projects Page',
  ABOUT: 'About Page',
  PAINTING_SPECIFIC_PAGE: 'Painting Specific Page',
  EVENT_SEPCIFIC_PAGE: 'Event Specific Page',
  SHIPPING_AND_POLICIES: 'Shipping and Policies Page',
};

export const CONTENT_MODELS = {
  HERO_IMAGE: 'HeroImage',
  COLLECTION: 'Collection',
  GALLERY: 'Gallery',
  EVENT: 'Event',
  PAINTING: 'Painting',
  SPECIAL_PROJECTS_TOP_SECTION: 'SpecialProjectsTopSection',
  SPECIAL_PROJECT: 'SpecialProject',
  ABOUT_THE_AUTHOR: 'AboutTheAuthor',
  RICH_TEXT: 'ContentTypeRichText',
  ABOUT_PAGE_TOP_SECTION: 'AboutPageTopSection',
};

export const getEntryDataFromEntryIds = async ({ entryIds }) => {
  if (!entryIds) return [];
  const {
    HERO_IMAGE,
    COLLECTION,
    GALLERY,
    SPECIAL_PROJECTS_TOP_SECTION,
    PAINTING,
    RICH_TEXT,
    ABOUT_PAGE_TOP_SECTION,
  } = CONTENT_MODELS;

  const mapContentModelToQuery = {
    [HERO_IMAGE]: getHeroImage,
    [COLLECTION]: getCollectionByEntryId,
    [GALLERY]: getGallery,
    [SPECIAL_PROJECTS_TOP_SECTION]: getSpecialProjectsTopSection,
    [PAINTING]: getPaintingByEntryId,
    [RICH_TEXT]: getRichTextByEntryId,
    [ABOUT_PAGE_TOP_SECTION]: getAboutPageTopSection,
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
