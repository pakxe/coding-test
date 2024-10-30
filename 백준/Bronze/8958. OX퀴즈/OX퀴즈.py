'''
연속할수록 가산

현재 콤보를 계속 저장해서 사용한다.
'''

def calcScore (mark):
    combo = 0
    score = 0
    
    for i in range(len(mark)):
        cur = mark[i]
        
        if cur == 'X':
            combo = 0
            continue
            
        score += (combo + 1)
        combo += 1

    return score

n = int(input())
markList = [input() for _ in range(n)]

scoreList = list(map(lambda x: str(calcScore(x)), markList))
print('\n'.join(scoreList))
            