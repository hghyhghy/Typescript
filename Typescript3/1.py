def ofremove(a,target):

    pointer = 0
    
    for num in a:

        if  num != target:

            a[pointer] = num

            pointer +=1

    return pointer

nums = [0, 1, 2, 2, 3, 0, 4, 2]
target = 2
remove = ofremove(nums, target)
print("Array after removing:", nums[:remove])
print(remove)