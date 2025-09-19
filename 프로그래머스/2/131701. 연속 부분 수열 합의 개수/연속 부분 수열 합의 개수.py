def solution(elements):
    count = 0
    s = set()
    for i in range(len(elements)):
        for j in range(len(elements)):
            if j + i >= len(elements):
                rest = (j + i + 1) - len(elements) 
                front = elements[j:]
                back = elements[:rest]
                cur = [*front, *back]
                s.add(sum(cur))
                
            else:
                cur = elements[j:j + i + 1]
                s.add(sum(cur))
                
    return len(s)
                
    