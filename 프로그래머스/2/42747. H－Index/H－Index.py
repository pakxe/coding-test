def solution(citations):
    if len(citations) == 1:
        ans = 0 if citations[0] == 0 else 1
        return ans

    ans = 0
    sorted_c = sorted(citations, reverse=True)
    
    for i in range(len(sorted_c)):            
        if(sorted_c[i] < i + 1):
            return i

    return len(sorted_c)  