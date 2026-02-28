var reverseVowels = function (s) {
  let vowels = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);
  let arr = s.split("");

  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    if (!vowels.has(arr[left])) {
      left++;
      continue;
    }

    if (!vowels.has(arr[right])) {
      right--;
      continue;
    }

    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }
  return arr.join("");
};
