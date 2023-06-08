export const buildRecommendationsList = (
  currentPainting,
  allPaintingsResponse
) => {
  // Make sure the filter paintings is apart of a collection and not just a placeholder image on the home page
  // Filter out the currently view painting from the recommended list
  // If status === Sold then remove it from the recommended paintinga
  const filteredPaintingsArray = allPaintingsResponse.filter(
    ({ name, status, collection }) =>
      collection && name !== currentPainting.name && status !== "Sold"
  );
  return createRecommendedArray(filteredPaintingsArray);
};

// Function is used to populate a recommended list recursively
const createRecommendedArray = (
  filteredPaintingsArray,
  recommendedList = []
) => {
  // Create a random index
  const randomIndex = Math.floor(
    Math.random() * (filteredPaintingsArray.length - 1)
  );
  recommendedList.push(filteredPaintingsArray[randomIndex]);
  filteredPaintingsArray.splice(randomIndex, 1);

  // We only recommend 3 paintings at most
  // If the recommendedList length is larger than the filterPaintingsArray length then we know there isn't
  // enough filtered paintings in the list to recommend anymore paintings
  if (
    recommendedList.length === 3 ||
    recommendedList.length > filteredPaintingsArray.length
  ) {
    return recommendedList;
  }
  return createRecommendedArray(filteredPaintingsArray, recommendedList);
};
