/**
 * Created by William on 9/18/2016.
 */

const listOfNums = [1, 2, 3, 4];

function sumFor(nums) {
  let total = 0;
  for (const num of nums) {
    total += num;
  }
  return total;
}

console.log(sumFor(listOfNums));

function sumWhile(nums) {
  let total = 0;
  let i = 0;
  while (i < nums.length) {
    total += nums[i];
    i++;
  }
  return total;
}

console.log(sumWhile(listOfNums));

function sumRecursion(nums) {
  if (nums.length === 0) {
    return 0;
  }
  return nums[0] + sumRecursion(nums.slice(1, nums.length));
}

console.log(sumRecursion(listOfNums));

function sumTheSimpleWay(nums) {
  return _.reduce(nums, function test(memo, num) { return memo + num; }, 0);
}

console.log(sumTheSimpleWay(listOfNums));
