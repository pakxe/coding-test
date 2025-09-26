def solution(wallet, bill):
    c = 0
    b_row, b_col = bill
    w_row, w_col = wallet
    
    while(True):
        if min(b_row, b_col) <= min(w_row, w_col) and max(b_row, b_col) <= max(w_row, w_col):
            return c
        
        else:
            if b_row > b_col:
                b_row = int(b_row / 2)
            else:
                b_col = int(b_col / 2)
                
            c += 1
        