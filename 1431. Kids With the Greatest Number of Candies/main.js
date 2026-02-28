var kidsWithCandies = function (candies, extraCandies) {
  let max = Math.max(...candies);
  let result = [];

  for (let i = 0; i < candies.length; i++) {
    result.push(candies[i] + extraCandies >= max);
  }
  return result;
};
