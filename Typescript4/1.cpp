
#include <vector>
using namespace std;

vector<int> merge(vector<int>& nums1, int m, vector<int>& nums2, int n) {
    int i = m - 1;
    int j = n - 1;
    int k = m + n - 1;

    while (i >= 0 && j >= 0) {
        if (nums1[i] > nums2[j]) {
            nums1[k] = nums1[i];
            i--;
        } else {
            nums1[k] = nums2[j];
            j--;
        }
        k--;
    }

    while (j >= 0) {
        nums1[k] = nums2[j];
        j--;
        k--;
    }

    return nums1;
}

int main() {
    vector<int> nums1 = {1, 2, 3, 5, 6, 7};
    int m = 3;
    vector<int> nums2 = {100, 900, 566};
    int n = 3;

    vector<int> result = merge(nums1, m, nums2, n);

    return 0;
}
