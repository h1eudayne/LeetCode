// *** Hướng này thì dễ có vấn đề là out ra khỏi mảng vì i + 1 sẽ thêm cả trường hợp vốn không tồn tại
// var twoSum = function (nums, target) {
//   for (let i = 0; i <= nums.length; i++) {
//     if (nums[i] + nums[i + 1] === target) {
//       return [i , i + 1];
//     }
//   }
// };

var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};
