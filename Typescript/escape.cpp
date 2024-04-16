#include <iostream>
#include <sstream>
#include <vector>

std::string reverseWords(std::string s) {
    // Create a string stream to split the input string
    std::istringstream iss(s);
    std::vector<std::string> words;

    // Split the string into words using space as separator
    std::string word;
    while (iss >> word) {
        words.push_back(word);
    }
    
    // Reverse the order of the words
    std::reverse(words.begin(), words.end());
    
    // Join the words into a single string with a single space between each word
    std::ostringstream oss;
    for (const std::string& w : words) {
        oss << w << " ";
    }
    
    // Get the result string and remove the trailing space
    std::string result = oss.str();
    if (!result.empty()) {
        result.pop_back();
    }
    return result;
}

int main() {
    // Test the function
    std::string inputString = "  the sky is blue  ";
    std::cout << reverseWords(inputString) << std::endl; // Output: "blue is sky the"

    return 0;
}
