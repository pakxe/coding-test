'''
윤년: 하루인 2월 29일을 추가한다.
이거 각 달마다 몇일까지 있는지 알아야 한다. 주먹세기 방법. 
'''
def get_days(month):
    if month == 2:
        return 29
    else:
        if month <= 7:
            if month % 2 == 1:
                return 31
            else:
                return 30
        else:
            if month % 2 == 0:
                return 31
            else:
                return 30

def solution(month, day):
    day_names = ['FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED', 'THU']
    if month == 1:
        return day_names[(day - 1) % 7]
    else:
        days = day
        for i in range(1, month):
            days += get_days(i)
        return day_names[(days - 1) % 7]
    
    
