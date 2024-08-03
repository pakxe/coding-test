import sys
input = sys.stdin.readline

def repeat_n_times(n, m):
    result = str(n) * n
    if len(result) > m:
        return result[:m]
    else:
        return result

n, m = map(int, input().split())

print(repeat_n_times(n, m))