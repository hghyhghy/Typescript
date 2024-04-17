def create_counter(n):
    
    def counter():
        nonlocal n
        current_value = n
        n += 1
        # for returning the current value
        return current_value
    # for returning the counter function itself
    return counter

counter = create_counter(5)
print(counter())
print(counter())
print(counter())
