import { getHeroImage } from '@/lib/contentful';

export const PAGES = {
  HOME: 'Home',
};

export const getEntryDataFromEntryIds = async ({ entryIds }) => {
  const mapContentModelToQuery = {
    HeroImage: getHeroImage,
  };
  let data = [];
  // Using a for loop because map does not work well with async/await
  for (let i = 0; i < entryIds.length; i++) {
    const entry = entryIds[i];
    const contentModelId = entry.__typename;
    const query = mapContentModelToQuery[contentModelId];
    const componentData = await query({ entryId: entry.sys.id });
    componentData.contentModel = contentModelId; // Use this ID to map the data to a corresponding React component
    data.push(componentData);
  }
  return data;
};
