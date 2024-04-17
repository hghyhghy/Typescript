#include <vector>
#include <algorithm>

class ArrayWrapper {
private:
    std::vector<int> array;

public:
    ArrayWrapper(std::vector<int> array) : array(array) {}

    static ArrayWrapper addArrays(const ArrayWrapper& arr1, const ArrayWrapper& arr2) {
        std::vector<int> sumArray;
        int maxLength = std::max(arr1.array.size(), arr2.array.size());
        sumArray.reserve(maxLength);

        for (size_t i = 0; i < maxLength; ++i) {
            int sum = (i < arr1.array.size() ? arr1.array[i] : 0) + (i < arr2.array.size() ? arr2.array[i] : 0);
            sumArray.push_back(sum);
        }

        return ArrayWrapper(sumArray);
    }

    std::string toString() const {
        std::string result = "[";
        for (size_t i = 0; i < array.size(); ++i) {
            result += std::to_string(array[i]);
            if (i < array.size() - 1) {
                result += ",";
            }
        }
        result += "]";
        return result;
    }
};

int main() {
    ArrayWrapper arr1({1, 2, 3});
    ArrayWrapper arr2({4, 5, 6});

    ArrayWrapper sumArray = ArrayWrapper::addArrays(arr1, arr2);
    std::cout << sumArray.toString() << std::endl; // Output: [5,7,9]

    return 0;
}
