

#include <iostream>
#include <vector>

template<typename T>
T applyReducer(std::vector<T>& nums, T (*fn)(T, T), T init) {
    T val = init;
    
    for (int i = 0; i < nums.size(); i++) {
        val = fn(val, nums[i]);
    }
    
    return val;
}

// Example usage
int sum(int a, int b) {
    return a + b;
}

int main() {
    std::vector<int> nums = {1, 2, 3, 4, 5};
    int initialValue = 0;
    
    std::cout << applyReducer(nums, sum, initialValue) << std::endl; // Output: 15 (sum of all elements)
    
    return 0;
}
