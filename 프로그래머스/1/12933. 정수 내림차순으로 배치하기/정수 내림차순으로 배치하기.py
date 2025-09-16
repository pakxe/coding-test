'''
str으로 바꾸고 순회하는데, pq를 써도 될 것 같기도 하고.. 근데 어차피 n이 10이하니까 괜찮을듯. 
0~9까지의 숫자니까, 10길이의 카운터 배열을 만들고 ++ 한후 순회
'''

def solution(n):
    str_n = str(n)
    
    arr = [0 for _ in range(10)]
    
    for char in str_n:
        index = int(char)
        
        arr[index] += 1
        
    res = ''
    for i in range(len(arr) - 1, -1, -1):
        count = arr[i]
        res += str(i) * count
        
    return int(res)
        
        
        