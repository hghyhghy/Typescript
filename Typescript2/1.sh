#!/bin/bash

is_empty_array() {
    local arr=("$@")  # Store all arguments in an array
    if [ ${#arr[@]} -eq 0 ]; then
        return 0  # Array is empty
    else
        return 1  # Array is not empty
    fi
}

# Example usage:
empty_array=()
non_empty_array=(1 2 3)

if is_empty_array "${empty_array[@]}"; then
    echo "Empty array"
else
    echo "Non-empty array"
fi

if is_empty_array "${non_empty_array[@]}"; then
    echo "Empty array"
else
    echo "Non-empty array"
fi
