teamA = list(map(int, input().split()))
teamB = list(map(int, input().split()))

def scoring (scores):
    return scores[0] * 6 + scores[1] * 3 + scores[2] * 2 + scores[3] * 1 + scores[4] * 2

print(f'{scoring(teamA)} {scoring(teamB)}')
