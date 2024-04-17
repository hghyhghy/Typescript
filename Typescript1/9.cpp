#include<iostream>
auto createCounter(int& n) {
    return [&n]() -> int {
        return n++;
    };
}

int main() {
    int n = 5;

    // Create the counter function
    auto counter = createCounter(n);

    // Call the counter function multiple times
    std::cout << counter() << std::endl; // Output: 5
    std::cout << counter() << std::endl; // Output: 6
    std::cout << counter() << std::endl; // Output: 7

    return 0;
}