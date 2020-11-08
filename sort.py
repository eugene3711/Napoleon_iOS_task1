def bubbleSort(arr): 
    n = len(arr) 
  
    for i in range(n-1): 
  
        for j in range(0, n-i-1): 
   
            if arr[j] > arr[j+1] : 
                arr[j], arr[j+1] = arr[j+1], arr[j]
    return arr

def reverseBubbleSort(arr): 
    n = len(arr)   
   
    for i in range(n-1):      

        for j in range(0, n-i-1): 
   
            if arr[j] < arr[j+1] : 
                arr[j], arr[j+1] = arr[j+1], arr[j] 
    return arr

def newSort(arr):
    for i in arr:
        even = [x for x in arr if x % 2 == 0]
        odd = [x for x in arr if x % 2 == 1]
        even = bubbleSort(even)
        odd = reverseBubbleSort(odd)
    return even+odd

arr =  [3, 4, 1, 2, 16, 27, 13] 

result = newSort(arr) 
  
print (f"Sorted array: {result}") 
