#!/bin/bash

merge_arrays() {
    nums1=("$@")
    m=$(( $# / 2 ))
    nums2=("${@:m+1}")
    n=$(( $# - m ))

    i=$(( m - 1 ))
    j=$(( n - 1 ))
    k=$(( m + n - 1 ))

    while [[ i -ge 0 && j -ge 0 ]]; do
        if [[ ${nums1[i]} -gt ${nums2[j]} ]]; then
            nums1[k]=${nums1[i]}
            ((i--))
        else
            nums1[k]=${nums2[j]}
            ((j--))
        fi
        ((k--))
    done

    while [[ j -ge 0 ]]; do
        nums1[k]=${nums2[j]}
        ((j--))
        ((k--))
    done

    echo "${nums1[@]}"
}

nums1=(1 2 3 5 6 7)
nums2=(100 900 566)

merged_array=$(merge_arrays "${nums1[@]}" "${nums2[@]}")
echo "${merged_array[@]}"
