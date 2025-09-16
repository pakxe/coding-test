def solution(numbers):
    counters = [0 for _ in range(10)]
    
    for n in numbers:
        counters[n] += 1
        
    s = 0
    for i in range(len(counters)):
        count = counters[i]
        
        if count == 0:
            s += i
            
    return s