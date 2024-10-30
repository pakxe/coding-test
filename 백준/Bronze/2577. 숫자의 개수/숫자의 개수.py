'''
주어진 식을 계산한다.
스트링으로 바꾼다. 
각스트링을 1자씩 읽는다.
9길이를 가진 배열을 준비시킨다. 
[읽은 숫자 - 1] ++ 한다.
'''

numbers = [int(input()) for _ in range(3)]

calc_res = str(numbers[0] * numbers[1] * numbers[2])

countList = [0] * 10

for i in range(len(calc_res)):
    curNum = int(calc_res[i])
    countList[curNum] += 1

print(countList[0])

for i in range(1, len(countList)):
    print(countList[i])

