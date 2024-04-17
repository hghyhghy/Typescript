struct ArrayWrapper {
    array: Vec<i32>,
}

impl ArrayWrapper {
    fn new(array: Vec<i32>) -> Self {
        Self { array }
    }

    fn add_arrays(arr1: &ArrayWrapper, arr2: &ArrayWrapper) -> ArrayWrapper {
        let mut sum_array = Vec::new();
        let max_length = std::cmp::max(arr1.array.len(), arr2.array.len());

        for i in 0..max_length {
            let sum = arr1.array.get(i).unwrap_or(&0) + arr2.array.get(i).unwrap_or(&0);
            sum_array.push(sum);
        }

        ArrayWrapper::new(sum_array)
    }

    fn to_string(&self) -> String {
        let elements: Vec<String> = self.array.iter().map(|x| x.to_string()).collect();
        format!("[{}]", elements.join(","))
    }
}

fn main() {
    let arr1 = ArrayWrapper::new(vec![1, 2, 3]);
    let arr2 = ArrayWrapper::new(vec![4, 5, 6]);

    let sum_array = ArrayWrapper::add_arrays(&arr1, &arr2);
    println!("{}", sum_array.to_string()); // Output: [5,7,9]
}
