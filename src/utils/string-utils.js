export const formatPrice = number => {
  return new Intl.NumberFormat("en-CA", {
    style: "currency",
    currency: "CAD",
  }).format(number);
};

export const emailValidatingRegex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const emailValidator = email => {
  return emailValidatingRegex.test(email);
};

export const capitalizeFirstLetterOfEachWord = sentence => {
  if (!sentence) return "";
  return sentence.replace(/(^\w{1})|(\s+\w{1})/g, letter =>
    letter.toUpperCase()
  );
};

const mapToMonth = {
  1: "January",
  2: "Feburary",
  3: "March",
  4: "April",
  5: "May",
  6: "June",
  7: "July",
  8: "August",
  9: "September",
  10: "October",
  11: "November",
  12: "December",
};

export const formatDate = dateString => {
  dateString = dateString.split("T")[0]; // remove timestamp
  const date = new Date(dateString);
  const day = date.getDate() + 1;
  const month = mapToMonth[date.getMonth() + 1];
  const year = date.getFullYear();
  return `${month} ${day}, ${year}`;
};

export const isOdd = num => num % 2;
