#include <iostream>
#include <vector>
using namespace std;

void moveZeroes(vector<int>& nums) {
    int temp = 0;

    // Move non-zero elements to the beginning of the array
    for (int i = 0; i < nums.size(); i++) {
        if (nums[i] != 0) {
            nums[temp++] = nums[i];
        }
    }

    // Fill the remaining positions with zeroes
    while (temp < nums.size()) {
        nums[temp++] = 0;
    }
}

int main() {
    vector<int> nums = {0, 2, 1, 4, 0};

    // Before moving zeroes
    cout << "Before moving zeroes: ";
    for (int num : nums) {
        cout << num << " ";
    }
    cout << endl;

    // Move zeroes to the end
    moveZeroes(nums);

    // After moving zeroes
    cout << "After moving zeroes: ";
    for (int num : nums) {
        cout << num << " ";
    }
    cout << endl;

    return 0;
}
