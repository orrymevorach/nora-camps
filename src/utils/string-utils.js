export const formatPrice = number => {
  return new Intl.NumberFormat('en-CA', {
    style: 'currency',
    currency: 'CAD',
  }).format(number);
};

export const capitalizeFirstLetterOfEachWord = sentence =>
  sentence.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
