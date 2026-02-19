import { useRouter } from "next/router";
import { useState, useEffect, useCallback } from "react";

export const useFilterByCollection = ({ entries }) => {
  const [gallery, setGallery] = useState(entries);
  const { query } = useRouter();

  const filterCollectionsAndFormatForPageBuilder = useCallback(
    currentCollection => {
      const paintingsInSelectedCollection = entries[0]?.items.filter(
        item => item?.collection?.name === currentCollection
      );
      // This is the format that the Page Builder expects the content in the gallery

      const collection = [
        {
          items: paintingsInSelectedCollection,
          contentModel: "Gallery",
        },
      ];
      setGallery(collection);
    },
    [entries]
  );

  useEffect(() => {
    const collectionFilter = query.collection;
    if (collectionFilter === "Browse All" || !collectionFilter) {
      return setGallery(entries);
    }
    if (collectionFilter) {
      filterCollectionsAndFormatForPageBuilder(query.collection);
    }
  }, [query, entries, filterCollectionsAndFormatForPageBuilder]);

  return gallery;
};
