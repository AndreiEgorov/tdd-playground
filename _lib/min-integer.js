module.exports = array => {
  if (!Array.isArray(array)) return 0;
  if (
    array.some(value => value <= 0) ||
    array.some(value => typeof value !== "number")
  )
    return 0;

  adjustedArray = array.sort();

  for (let i = 0; i < array.length; i++) {
    let firstNum = adjustedArray[i];
    let secondNum = adjustedArray[i + 1];
    if (secondNum - firstNum > 1 || secondNum == undefined) {
      return firstNum + 1;
    }
  }
};
