export const removeCurrentPaintingFromRecommendedList = (
  paintingName,
  allPaintingsResponse
) => {
  const filteredPaintingsArray = allPaintingsResponse.filter(
    painting => painting.name !== paintingName
  );
  return filteredPaintingsArray.splice(0, 3);
};
