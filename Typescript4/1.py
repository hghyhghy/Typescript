
def length(s):

    s=s.strip()
    
    length = 0
    for i in range(len(s)-1 , -1 , -1):

        if s[i] == " ":
            break;
        
        length += 1
    
    return length

s ="hello world"
print(length(s))