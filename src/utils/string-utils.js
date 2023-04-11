export const formatPrice = number => {
  return new Intl.NumberFormat('en-CA', {
    style: 'currency',
    currency: 'CAD',
  }).format(number);
};

export const capitalizeFirstLetterOfEachWord = sentence =>
  sentence.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());

const mapToMonth = {
  1: 'January',
  2: 'Feburary',
  3: 'March',
  4: 'April',
  5: 'May',
  6: 'June',
  7: 'July',
  8: 'August',
  9: 'September',
  10: 'October',
  11: 'November',
  12: 'December',
};

export const formatDate = dateString => {
  dateString = dateString.split('T')[0]; // remove timestamp
  const date = new Date(dateString);
  const day = date.getDate() + 1;
  const month = mapToMonth[date.getMonth() + 1];
  const year = date.getFullYear();
  return `${month} ${day}, ${year}`;
};
