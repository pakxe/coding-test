def calc_row(row, n):
    bin_ = bin(row)[2:]
    
    if len(bin_) < n:
        zero_count = n - len(bin_)
        bin_ = ('0' * zero_count) + bin_
        
    return bin_
    
def solution(n, arr1, arr2):
    res = [[' ' for _ in range(n)] for _ in range(n)]
    
    for y in range(n):
        row1 = calc_row(arr1[y], n)
        row2 = calc_row(arr2[y], n)
        
        for x in range(n):
            if row1[x] == '1' or row2[x] == '1':
                res[y][x] = '#'
        
    ans = []
    for y in range(n):
        line = ''.join(res[y])
        ans.append(line)
        
    return ans
            
