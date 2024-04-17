#!/bin/bash

# Function to create a counter
create_counter() {
    n=$1
    # Define and return a function
    counter() {
        echo "$n"
        ((n++))
    }
    # Return the function
    return 0
}

# Example usage
create_counter 5

# Call the counter function multiple times
counter
counter
counter
