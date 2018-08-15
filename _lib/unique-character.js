module.exports = string => {
  if (typeof string !== "string" || !string || !string.length) return 0;
  if (string.match(/^(.)\1{1,}$/)) return undefined;
  if (string.match(/[0-9]/)) return 0;

  let myArray = string.split("");
  let arrayLength = myArray.length;
  let repeatValues = [];
  let uniqueValues = [];

  for (let i = 0; i < arrayLength; i++) {
    var shifted = myArray.shift(i);
    if (myArray.includes(shifted) || repeatValues.includes(shifted)) {
      repeatValues.push(shifted);
    } else {
      uniqueValues.push(shifted);
    }
  }
  return uniqueValues.join("");
};
