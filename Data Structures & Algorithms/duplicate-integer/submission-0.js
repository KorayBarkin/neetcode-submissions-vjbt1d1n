class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let uniqueNums = new Set(nums);
        if (nums.length == uniqueNums.size) {
            return false;
        } else {
            return true;
        }
    }
}
