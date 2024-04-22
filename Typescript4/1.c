#include <stdio.h>

void moveZeroes(int* nums, int numsSize) {
    int temp = 0;

    // Move non-zero elements to the beginning of the array
    for (int i = 0; i < numsSize; i++) {
        if (nums[i] != 0) {
            nums[temp++] = nums[i];
        }
    }

    // Fill the remaining positions with zeroes
    while (temp < numsSize) {
        nums[temp++] = 0;
    }
}

void printArray(int* nums, int numsSize) {
    for (int i = 0; i < numsSize; i++) {
        printf("%d ", nums[i]);
    }
    printf("\n");
}

int main() {
    int nums[] = {0, 2, 1, 4, 0};
    int numsSize = sizeof(nums) / sizeof(nums[0]);

    // Before moving zeroes
    printf("Before moving zeroes: ");
    printArray(nums, numsSize);

    // Move zeroes to the end
    moveZeroes(nums, numsSize);

    // After moving zeroes
    printf("After moving zeroes: ");
    printArray(nums, numsSize);

    return 0;
}
