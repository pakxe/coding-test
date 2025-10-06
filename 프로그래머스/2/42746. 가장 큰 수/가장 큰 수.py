from functools import cmp_to_key

# -1은 반전안한다. 1은 반전한다. 0은 상관없음 을 의미하는 것으로 확인
def custom_compare(a, b):
    f = int(''.join([*list(a), *list(b)]))
    s = int(''.join([*list(b), *list(a)]))
    
    if f > s:
        return -1
    else:
        return 1

def solution(numbers):
    
    numbers = list(map(str, numbers))
    sorted_numbers = sorted(numbers, key=cmp_to_key(custom_compare))
    
    return str(int(''.join(sorted_numbers)))
    

