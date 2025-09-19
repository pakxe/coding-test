import math

def solution(n, words):
    s = set()
    s.add(words[0])
    
    for i in range(1, len(words)):
        word = words[i]
        prev_word = words[i - 1]
        
        if prev_word[-1] != word[0]:
            return [(i % n) + 1, math.floor(i / n) + 1]
        
        if word in s:
            return [(i % n) + 1, math.floor(i / n) + 1]
        
        s.add(word)
    
    return [0, 0]
        
        
        
        