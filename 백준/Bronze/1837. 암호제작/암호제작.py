"""
입력
두 소수의 곱으로 이루어진 암호 K

두 소수중 하나라도 K보다 작은 암호는 안좋은 암호

143 11 13 -> 33 + 110 => 143
77 -> 11 * 7 => 77
"""

base, k = map(int, input().split())

isFind = False
for i in range(2, k):
    if base % i == 0: 
        if i < k: 
            print(f"BAD {i}");
            isFind = True;
            break;
        
if not isFind:
    print("GOOD")
        
    
    