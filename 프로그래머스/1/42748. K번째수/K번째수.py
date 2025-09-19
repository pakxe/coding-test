def solution(array, commands):
    ans = []
    for i in range(len(commands)):
        start, end, index = commands[i]
        
        sliced_arr = array[start-1:end]
        
        sorted_arr = sorted(sliced_arr)
        
        ans.append(sorted_arr[index - 1])
        
    return ans
        