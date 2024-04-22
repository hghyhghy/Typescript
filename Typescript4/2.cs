using System;

public class Solution {
    public int MissingNumber(int[] nums) {
        int n = nums.Length;
        int actualSum = 0;
        
        // Calculate actual sum
        foreach (int num in nums) {
            actualSum += num;
        }
        
        // Calculate expected sum
        int expectedSum = (n * (n + 1)) / 2;
        
        // Return the missing number
        return expectedSum - actualSum;
    }

    static void Main(string[] args) {
        int[] nums = {3, 0, 1};
        Solution solution = new Solution();
        int missingNumber = solution.MissingNumber(nums);
        Console.WriteLine("Missing number: " + missingNumber);
    }
}
