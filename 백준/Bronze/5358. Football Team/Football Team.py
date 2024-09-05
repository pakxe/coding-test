import sys

for line in sys.stdin:
    cur = list(line.rstrip())

    for index, char in enumerate(cur): 
        if char == 'e':
            cur[index] = 'i'
        elif char == 'i':
            cur[index] = 'e'
        elif char == 'E':
            cur[index] = 'I'
        elif char == 'I':
            cur[index] = 'E'

    print(''.join(cur)) 
