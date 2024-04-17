
def isempty(obj):

    if isinstance(obj,list) or isinstance(obj,tuple):

        return len(obj)  == 0
    
    elif isinstance(obj,dict):

        return len(obj) == 0
    
    else:

        return False
    
empty_list = []
non_empty_list = [1, 2, 3]
empty_dict = {}
non_empty_dict = {"key": "value"}

print(isempty(empty_list))
print(isempty(non_empty_list))
print(isempty(empty_dict))
print(isempty(non_empty_dict))


