using System;
using System.Collections.Generic;

class Program
{
    static void Main()
    {
        int[] nums = { 0, 2, 1, 4, 0 };

        // Before moving zeroes
        Console.Write("Before moving zeroes: ");
        PrintArray(nums);

        // Move zeroes to the end
        MoveZeroes(nums);

        // After moving zeroes
        Console.Write("After moving zeroes: ");
        PrintArray(nums);
    }

    static void MoveZeroes(int[] nums)
    {
        int temp = 0;

        // Move non-zero elements to the beginning of the array
        for (int i = 0; i < nums.Length; i++)
        {
            if (nums[i] != 0)
            {
                nums[temp++] = nums[i];
            }
        }

        // Fill the remaining positions with zeroes
        while (temp < nums.Length)
        {
            nums[temp++] = 0;
        }
    }

    static void PrintArray(int[] nums)
    {
        foreach (var num in nums)
        {
            Console.Write(num + " ");
        }
        Console.WriteLine();
    }
}
