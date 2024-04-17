import java.util.function.Supplier;

public class Main {
    public static void main(String[] args) {
        // Initial value of the counter
        int n = 5;

        // Create the counter function
        Supplier<Integer> counter = createCounter(n);

        // Call the counter function multiple times
        System.out.println(counter.get()); // Output: 5
        System.out.println(counter.get()); // Output: 6
        System.out.println(counter.get()); // Output: 7
    }

    // Function to create a counter
    public static Supplier<Integer> createCounter(int n) {
        return () -> n++;
    }
}
