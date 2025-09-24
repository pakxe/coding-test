import math

def calc_a_answer(problem_index):
    return (problem_index % 5) + 1

def calc_b_answer(problem_index):
    if problem_index % 2 == 0:
        return 2
    else:
        arr = [1, 3, 4, 5]
        return arr[int(problem_index / 2) % 4]
    
def calc_c_answer(problem_index):
    arr = [3, 1, 2, 4, 5]
    return arr[math.floor(int(problem_index % 10) / 2)]

def solution(answers):
    a_c = 0
    b_c = 0
    c_c = 0
    for i in range(len(answers)):
        cur_answer = answers[i]
        
        a_answer = calc_a_answer(i)
        b_answer = calc_b_answer(i)
        c_answer = calc_c_answer(i)
        
        if a_answer == cur_answer:
            a_c += 1
        if b_answer == cur_answer:
            b_c += 1
        if c_answer == cur_answer:
            c_c += 1
    
    res_tuple = [(a_c, 1), (b_c, 2), (c_c, 3)]
    sorted_t = sorted(res_tuple, reverse = True)
    
    max_score, max_score_index = sorted_t[0]
    res = [max_score_index]
    for i in range(1, len(sorted_t)):
        cur_score, index = sorted_t[i]
        
        if cur_score == max_score:
            res.append(index)
        else:
            break
    
    return sorted(res)
            