export const removeCurrentPaintingFromRecommendedList = (
  paintingName,
  allPaintingsResponse
) => {
  const allPaintingsCopy = [...allPaintingsResponse];

  for (let i = 0; i < allPaintingsCopy.length; i++) {
    if (paintingName === allPaintingsCopy[i].name) {
      allPaintingsCopy.splice(i, 1);
      break;
    }
  }
  return allPaintingsCopy.splice(0, 3);
};
