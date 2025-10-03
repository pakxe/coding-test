import math

IN = 'IN'

def time_to_int(time):
    hour, minite = time.split(':')
    hour = int(hour)
    minite = int(minite)
    
    return (hour * 60) + minite

def solution(fees, records):
    base_time, base_fee, unit_time, unit_fee = fees
    
    cars = {} # 번호, 입차 시간
    total = {} # 번호, 총 요금
    
    for i in range(len(records)):
        time, car_num, case = records[i].split()
        
        if case == IN:
            cars[car_num] = time_to_int(time)
            
        else:
            in_time = cars[car_num]
            cars.pop(car_num)
            
            out_time = time_to_int(time)
            
            if car_num in total:
                total[car_num] = total[car_num] + (out_time - in_time)
            else:
                total[car_num] = out_time - in_time
            
    for key in cars:
        in_time = cars[key]
        out_time = time_to_int('23:59')
        
        if key in total:
            total[key] = total[key] + (out_time - in_time)
        else:
            total[key] = out_time - in_time
            
    ans = [] #(차번호, 요금)
    for key in total:
        total_time = total[key]
        
        if total_time <= base_time:
            ans.append((key, base_fee))
        else:
            total_fee = base_fee
            rest_time = total_time - base_time
            rest_fee = math.ceil(rest_time / unit_time) * unit_fee
            
            total_fee += rest_fee
            ans.append((key, total_fee))
    
    
    sorted_ans = sorted(ans)
    res = []
    for i in range(len(sorted_ans)):
        car_num, fee = sorted_ans[i]
        
        res.append(fee)
        
    return res
            
