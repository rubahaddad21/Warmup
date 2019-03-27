/* 
Given an array of integers, return indices of the two numbers
such that they add up to a specific target.
You may assume that each input would have exactly one solution.
Example:
var nums = [2, 7, 11, 15], target = 9,
twoSum(nums,9); //should return [0,1] because nums[0] + nums[1] = 2 + 7 = 9;
*/


var twoSum = function (number, target) {
    var result = [];
    for (var i = 0; i < number.length; i++) {
        for (var y = i + 1; y < number.length; y++) {
            if (number[i] + number[y] === target) {
                result.push(i);
                result.push(y);
            }
        }
    }
    return result;
}
