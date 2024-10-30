'''
45분을 뺀다.
내생각은 시간을 분으로 바꾸고 45를 뺀 후 시분 단위로 만들어주는 것이다. 
만약 45를 빼서 음수가 나올 경우 24시간을 분으로 환산한 후 나온 음수만큼을 더 빼준다. 그리고 그걸 
시분단위로 환산한다.

음수가 miniteToTime에 들어올 경우 어떻게 해야할까?
24시를 분으로 바꾼 값에서 들어온 민을 더해준다. 그리고 그걸 60으로 나눈 몫으로 시간을 계싼할 수 있다. 
'''

def timeToMinute (hour, minute):
    return (hour * 60) + minute;

def minuteToTime (minute):
    hour = minute // 60 if minute >= 0 else (timeToMinute(24, 0) + minute) // 60
    return [hour, minute % 60]

hour, minute = map(int, input().split())
totalMinute = timeToMinute(hour, minute)
earlyWakeUpMinute = totalMinute - 45
resTime = minuteToTime(earlyWakeUpMinute)

print(' '.join(map(str, resTime)))



