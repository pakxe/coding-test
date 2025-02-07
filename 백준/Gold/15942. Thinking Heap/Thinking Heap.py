'''
자연수 k가 배열[p] 에 있도록 하는 삽입 순서가 존재한다면,
i번째 줄에 i번째로 삽입할 수?

n개의 자연수를 모두 삽입해야한다. 
pop은 하지 않는다. 

생각나는 방법은 무지성 순서 난사.. 100% 시간초과날 것 같다. 

1. 원하는 위치 p에 들어가는게 아에 불가능한 수가 있기도 함. (정확한 조건은 아직 모르겠음)

순서 조작을 어떻게 할 수 있을까? 꼬리자르기 마냥 유배시키는 방법이 있음. 
내가 원하는 위치의 부모노드들이 다 나보다 작으면 됨. 

내가 원하는 위치의 부모노드 개수가 부족하다면 불가능한 수가 된다. <- 조건 발견!
부모노드 수가 충분하다면 삽입 순서를 조절하여 끼워넣는다. 이걸 어떻게 할 수 있을까?

버블업이 일어나지 않도록 넣으면 될 것 같은데, 버블 업을 이용해야하는 경우는 없을까?
자신의 부모보다 1큰수를 할당해서 넣으면 됨. 이때 위치시킬 닌자노드는 바로 할당하면 안된다. 아래에서 버블업이 일어날 수도 있다 .
위치시키고 버블업을 막으려면 최대한 몰아놔야한다. 

현재 위치시킬 수의 부모를 보고, 그 부모보다 1큰수부터 순회하며 찾아서 끼워넣으면 되지 않을까?

같은 레벨에 위치시켜야 하는데 타겟차례라면, 1큰수가 타겟이고 현재 위치가 타겟위치가 아니라면 +1한 수를 집어넣는다. 
그렇게 부모보다 큰 수를 넣어야하는데 더이상 넣을 수가 없다면 불가능 타겟이 된다.
'''

'''
0번을 비우고
1번을 부모로 한다. 
자식은 *2, *2 + 1
'''
import sys 

n = int(input())
target, targetIndex = map(int, input().split())

# 최소힙인데 루트노드가 1이 아닌건 불가능
if targetIndex == 1 and target != 1:
    print(-1)
    sys.exit(0)
    
# 루트노드가 1이라면 그냥 순차 출력하면 답이다.
if targetIndex == 1 and target == 1:
    for i in range(1, n + 1):
        print(i)
    sys.exit(0)
        
tree = [None] * (n + 1)

'''
타겟의 부모들을 구하고 그 부모는 1 -> 오름차순 배치
'''
isUsed = [False] * (n + 1)

parents = [] # 엄마, 할머니, 증조할머니, 루트할머니 순으로 쌓인다.
cursor = targetIndex
tree[targetIndex] = target

while True:
    if cursor <= 1:
        break;
        
    parentIndex = cursor // 2
    parents.append(parentIndex)
    
    cursor = parentIndex

firstCount = 1
for i in range(len(parents) - 1, -1, -1): # 타겟의 할머니들을 오름차순으로 고정한다.
    tree[parents[i]] = firstCount
    firstCount += 1

if firstCount > target:
    print(-1)
    sys.exit(0)
    
secondCount = target + 1
# 자식 체우기
def fillChild():
    global secondCount

    stack = []
    stack.append(targetIndex)
    
    while len(stack) > 0:
        idx = stack.pop()
        
        childs = [idx * 2, idx * 2 + 1]
        
        for child in childs:
            if child > n:
                break;

            parentValue = tree[idx]
            
            if secondCount > n:
                print(-1)
                sys.exit(0)
                
            tree[child] = secondCount
            secondCount += 1
            stack.append(child)
        
fillChild()
    


# 지금까지로 타겟과 엄마 -> 루트 할머니까지의 할당이 완료됟다. 
# 이제 배열의 나머지 값을 채운다.

count = firstCount
for i in range(1, n + 1):
    if tree[i] != None:
        continue
        
    if count == target:
        count = secondCount

    parentValue = tree[i // 2]
    if parentValue >= count:
        print(-1)
        sys.exit(0)
        
    tree[i] = count 
    count += 1
    
print('\n'.join(map(str, tree[1:])))