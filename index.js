function sumItems(array) {
  // Sum all the numbers in the array
  return array.reduce((acc, cur) => {
    if (Array.isArray(cur)) {
      return sumItems(cur) + acc;
    } else {
      return cur + acc;
    }
  }, 0);
}

module.exports = sumItems;