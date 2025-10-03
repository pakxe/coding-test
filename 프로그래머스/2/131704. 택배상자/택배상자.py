from collections import deque

def solution(order):
    orders = deque(order)
    main_con = deque([i + 1 for i in range(len(order))])
    sub_con = []
    
    c = 0
    while(True):
        if len(orders) <= 0:
            break
        # 종료 조건 잊지말기
        cur_order = orders[0]
        # 종료 조건 1 - main이 비었는데 sub탑이 아닌경우
        if len(main_con) <= 0:
            if len(sub_con) <= 0:
                break
                
            if sub_con[-1] != cur_order:
                break
                
            else: # 일치하면 그거 뺌. 
                sub_con.pop()
                orders.popleft()
                c += 1
                continue
        
        cur_box = main_con[0]
        
        # main에 없으면
        if cur_box != cur_order:
            # sub에 있으면
            if len(sub_con) > 0 and sub_con[-1] == cur_order:
                c += 1
                orders.popleft()
                sub_con.pop()
            # sub에도 없으면
            else:
                sub_con.append(cur_box)
                main_con.popleft()
                
        # main에 있으면
        else:
            main_con.popleft()
            c += 1
            orders.popleft()
                
    return c
                
            
    
