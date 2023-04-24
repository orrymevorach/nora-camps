import { useRouter } from "next/router";
import { useState, useEffect, useCallback } from "react";

export const useFilterByCollection = ({
  allPaintings,
  entries,
  selectedCollection,
}) => {
  const [gallery, setGallery] = useState(entries);
  const { query } = useRouter();

  const filterCollectionsAndFormatForPageBuilder = useCallback(
    currentCollection => {
      const paintingsInSelectedCollection = allPaintings.filter(
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
    [allPaintings]
  );

  useEffect(() => {
    if (query.collection) {
      filterCollectionsAndFormatForPageBuilder(query.collection);
    } else {
      setGallery(entries);
    }
  }, [query, allPaintings, entries, filterCollectionsAndFormatForPageBuilder]);

  useEffect(() => {
    if (selectedCollection === "All") {
      return setGallery(entries);
    }

    if (selectedCollection) {
      filterCollectionsAndFormatForPageBuilder(selectedCollection);
    }
  }, [
    selectedCollection,
    allPaintings,
    entries,
    filterCollectionsAndFormatForPageBuilder,
  ]);

  return gallery;
};
