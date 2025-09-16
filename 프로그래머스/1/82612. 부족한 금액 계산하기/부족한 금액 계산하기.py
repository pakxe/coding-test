def solution(price, money, count):
    total_price = 0
    for i in range(count):
        total_price += (i + 1) * price
        
    if total_price <= money:
        return 0
        
    return total_price - money