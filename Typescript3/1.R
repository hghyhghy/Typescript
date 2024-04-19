fn remove_element(nums: &mut Vec<i32>, target: i32) -> usize {
    let mut pointer = 0;

    for num in nums.iter() {
        if *num != target {
            nums[pointer] = *num;
            pointer += 1;
        }
    }

    pointer
}

fn main() {
    let mut nums = vec![0, 1, 2, 2, 3, 0, 4, 2];
    let target = 2;
    let remove = remove_element(&mut nums, target);
    println!("Array after removing: {:?}", &nums[..remove]);
    println!("{}", remove);
}
