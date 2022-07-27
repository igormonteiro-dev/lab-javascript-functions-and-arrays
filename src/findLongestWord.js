function findLongestWord(arr) {
  if (!arr.length) return null;

  let word = "";
  for (let i = 0; i < arr.length; i++) {
    if (word.length < arr[i].length) {
      word = arr[i];
    }
  }

  return word;
}
