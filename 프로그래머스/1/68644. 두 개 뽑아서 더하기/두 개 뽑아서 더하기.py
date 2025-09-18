def solution(numbers):
    s = set()
    for i in range(len(numbers)):
        for j in range(i + 1, len(numbers)):
            acc = numbers[i] + numbers[j]
            
            s.add(acc)
            
    return sorted(list(s))