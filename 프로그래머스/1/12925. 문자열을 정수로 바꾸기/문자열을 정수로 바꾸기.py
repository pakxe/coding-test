'''
부호가 "올 수" 있음
"0"으로 시작하지 않음

부호 유무 판별
'''

def solution(s):
    first_s = s[0]
    if first_s == '+':
        num = s[1:]
        return int(num)
    
    elif first_s == '-':
        num = s[1:]
        return -int(num)
    
    else:
        return int(s)
    