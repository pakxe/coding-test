c = 0
temp = []

def add(numbers, signs):
    s = 0
    for i in range(len(numbers)):
        num = numbers[i]
        sign = signs[i]
        
        if sign == '-':
            s -= num
        else:
            s += num
    
    return s

def dfs(numbers, target):
    global c
    if len(temp) == len(numbers):
        s = add(numbers, temp)
        
        if s == target:
            c += 1
        
        return
        
    for i in range(2):
        if i == 0:
            temp.append('-')
        else:
            temp.append('+')
        dfs(numbers, target)
        temp.pop()
    
def solution(numbers, target):
    dfs(numbers, target)
    
    return c
    
        
        
        