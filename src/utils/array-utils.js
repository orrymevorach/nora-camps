export const buildRecommendationsList = (
  currentPainting,
  allPaintingsResponse
) => {
  const filteredPaintingsArray = allPaintingsResponse.filter(
    ({ name, status, collection }) =>
      collection && name !== currentPainting.name && status !== "Sold"
  );
  return createRecommendedArray(filteredPaintingsArray);
};

const createRecommendedArray = (
  filteredPaintingsArray,
  recommendedList = []
) => {
  const randomIndex = Math.floor(
    Math.random() * (filteredPaintingsArray.length - 1)
  );
  recommendedList.push(filteredPaintingsArray[randomIndex]);
  filteredPaintingsArray.splice(randomIndex, 1);

  if (
    recommendedList.length === 3 ||
    recommendedList.length > filteredPaintingsArray.length
  ) {
    return recommendedList;
  }
  return createRecommendedArray(filteredPaintingsArray, recommendedList);
};
