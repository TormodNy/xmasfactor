const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const monthText = (monthIndex) => months[monthIndex];

export const dateSuffix = (dateNumber) => {
  const dateString = dateNumber.toString();

  let suffix = "th";
  if (!(dateString.length >= 2 && dateString[dateString.length - 2] === "1")) {
    switch (dateString[dateString.length - 1]) {
      case "1":
        suffix = "st";
        break;
      case "2":
        suffix = "nd";
        break;
      case "3":
        suffix = "rd";
        break;
      default:
        suffix = "th";
    }
  }

  return dateString + suffix;
};
