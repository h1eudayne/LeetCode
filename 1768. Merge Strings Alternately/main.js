var mergeAlternately = function (word1, word2) {
  let temp = "";
  while (word1.length > 0 || word2.length > 0) {
    if (word1.length > 0) {
      temp += word1[0];
      word1 = word1.splice(1);
    }
    if (word2.length > 0) {
      temp += word2[0];
      word2 = word2.splice(1);
    }
  }
  return temp;
};
