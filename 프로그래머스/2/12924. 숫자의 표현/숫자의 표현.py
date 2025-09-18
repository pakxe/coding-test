'''
더하는거니까 max는 n이하
O(n^2)
1로 더하다가 작으면 더하고 같으면 추가하고 크면 다음 i로 넘어간다. 그리고 계속 더하고, 
자기 자신도 계산하기 위해 더하고나서 바로 체크해야한다.
'''

def solution(n):
    count = 0
    
    for i in range(1, n + 1):
        acc = 0
        for j in range(i, n + 1):
            acc += j
            
            if acc == n:
                count += 1
                break
            elif acc > n:
                break
            else:
                continue;
        
    return count