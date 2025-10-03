'''
누적하는 문제. 
위 아래 크기가 모두 같으므로 어디서 시작하든 똑같음
'''

def solution(land):
    s = [[0 for _ in range(len(land[0]))] for _ in range(len(land))]
    for i in range(len(land[0])):
        s[0][i] = land[0][i]
        
    for y in range(1, len(land)):
        for x in range(len(land[y])):
            for i in range(len(land[y])):
                if i != x:
                    s[y][x] = max(s[y][x], s[y - 1][i] + land[y][x])
                    
    return max(s[-1])
            
