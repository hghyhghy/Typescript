  
def ofchunk(arr,size):

    chunk = []

    for i in range(0,len(arr),size):

        chunk.append(arr[i:i+size])
    
    return chunk

arr =[1,2,3,4,5,6,7,8,9]
size = 3
print(ofchunk(arr,size))
    
