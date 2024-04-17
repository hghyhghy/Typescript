#include <unordered_map>
#include <string>

class Solution {
public:
    int romanToInt(std::string s) {
        std::unordered_map<char, int> romanValues = {
            {'I', 1},
            {'V', 5},
            {'X', 10},
            {'L', 50},
            {'C', 100},
            {'D', 500},
            {'M', 1000}
        };
        
        int result = 0;
        
        for (int i = 0; i < s.length(); ++i) {
            int currentVal = romanValues[s[i]];
            int nextVal = (i + 1 < s.length()) ? romanValues[s[i + 1]] : 0;
            
            if (nextVal > currentVal) {
                result -= currentVal;
            } else {
                result += currentVal;
            }
        }
        
        return result;
    }
};
