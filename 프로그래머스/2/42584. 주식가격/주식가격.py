'''
이건 뒤큰수 찾기랑 똑같은 문제라고 생각됨
뒤작은 수 찾기
인덱스랑 같이 넣어. 
'''

def solution(prices):
    s = []
    ans = [0 for _ in range(len(prices))]
    
    for i in range(len(prices)):
        cur_price = prices[i]
        
        if len(s) <= 0:
            s.append((cur_price, i))
            continue
            
        while(True):
            if len(s) <= 0:
                break
                
            top_v, top_i = s[-1]
            
            if top_v > cur_price:
                s.pop()
                ans[top_i] = i - top_i
            else:
                break
                
        s.append((cur_price, i))
    
    for i in range(len(s)):
        _, i = s[i]
        
        ans[i] = len(prices) - 1 - i
        
    return ans
