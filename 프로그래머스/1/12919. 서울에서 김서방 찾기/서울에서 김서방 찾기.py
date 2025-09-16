def solution(seoul):
    for i in range(len(seoul)):
        name = seoul[i]
        if name == 'Kim':
            return f'김서방은 {i}에 있다'
            