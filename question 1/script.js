function sortArrayStr(arr, typeSort = 1) {
  if (
    !Array.isArray(arr) ||
    arr.length > 100 ||
    (typeSort !== 1 && typeSort !== -1)
  ) {
    return null;
  }

  if (typeSort === 1) {
    return arr.sort();
  } else if (typeSort === -1) {
    return arr.sort().reverse();
  }
}

console.log(sortArrayStr(["b", "a", "c"], 1));
