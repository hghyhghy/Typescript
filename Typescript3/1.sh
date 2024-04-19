#!/bin/bash

remove_element() {
    local target=$1
    shift
    local -a nums=("$@")
    local pointer=0

    for num in "${nums[@]}"; do
        if [ "$num" -ne "$target" ]; then
            nums[$pointer]=$num
            ((pointer++))
        fi
    done

    echo "${nums[@]:0:pointer}"
    echo "$pointer"
}

# Example usage
nums=(0 1 2 2 3 0 4 2)
target=2
remove=$(remove_element "$target" "${nums[@]}")
echo "Array after removing: $remove"
