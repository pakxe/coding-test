ENTER = 'Enter'
LEAVE = 'Leave'
ENTER_MSG = '님이 들어왔습니다.'
LEAVE_MSG = '님이 나갔습니다.'
CHANGE = 'Change'

def solution(record):
    infos = {}
    for i in range(len(record)):
        command, *rest = record[i].split()
        
        if command == ENTER:
            _, uid, name = record[i].split()
            infos[uid] = name
        elif command == CHANGE:
            _, uid, name = record[i].split()
            infos[uid] = name
        
    res = []
    for i in range(len(record)):
        command, uid, *rest = record[i].split()
        
        if command == ENTER:
            name = infos[uid]
            res.append(name + ENTER_MSG)
        elif command == LEAVE:
            name = infos[uid]
            res.append(name + LEAVE_MSG)
            
    return res
        
        
        
