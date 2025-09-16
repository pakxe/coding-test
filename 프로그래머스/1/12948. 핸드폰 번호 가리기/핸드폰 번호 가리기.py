def solution(phone_number):
    third_number = phone_number[-4:]
    left_number_count = len(phone_number) - 4
    
    return '*' * left_number_count + str(third_number)
    
    