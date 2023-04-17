import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

export const useFilterByCollection = ({ allPaintings, entries }) => {
  const [gallery, setGallery] = useState(entries);
  const { query } = useRouter();
  useEffect(() => {
    if (query.collection) {
      const paintingsInSelectedCollection = allPaintings.filter(
        item => item.collection.name === query.collection
      );
      // This is the format that the Page Builder expects the content in the gallery
      const collection = [
        {
          items: paintingsInSelectedCollection,
          contentModel: 'Gallery',
        },
      ];
      setGallery(collection);
    } else {
      setGallery(entries);
    }
  }, [query, allPaintings, entries]);
  return gallery;
};
