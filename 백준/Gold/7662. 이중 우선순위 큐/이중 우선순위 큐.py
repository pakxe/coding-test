'''
삽입
삭제 1. 우선순위 최상 삭제(D 1), 2. 우선순위 최하 삭제(D -1)

값 자체가 우선 순위이다.

1. 테스트 케이스 개수
2. 연산 개수


'''

'''
동일한 정수 삽입 가능
동일 값이어도 하나만 삭제됨.
'''

class Node:
    def __init__(self, value):
        self.value = value
        self.isDeleted = False
        
class Heap:
    def __init__(self):
        self.maxHeap = [None]
        self.minHeap = [None]
        
        self.size = 0
    
    def add(self, value):
        node = Node(value)
        
        self.bubbleUpMax(node)
        self.bubbleUpMin(node)
        
        # self.printT('min add: ', self.minHeap)
        # self.printT('max add: ', self.maxHeap)
        
        self.size += 1
        
    def printT(self, name, target):
        res = []
        
        for i in range(1, len(target)):
            res.append(f'{target[i].value} {target[i].isDeleted}')
            
        # print(name, ', '.join(map(str, res)))
        
    def bubbleUpMax(self, node):
        self.maxHeap.append(node)
        nodeIndex = len(self.maxHeap) - 1

        while True:
            if nodeIndex <= 1:
                break

            parentIndex = nodeIndex // 2
            parentNode = self.maxHeap[parentIndex]
            
            if parentNode.value >= node.value:
                break
                
            self.swap(nodeIndex, parentIndex, self.maxHeap)
            nodeIndex = parentIndex

    def bubbleUpMin(self, node):
        self.minHeap.append(node)
        nodeIndex = len(self.minHeap) - 1
        
        while True:
            if nodeIndex <= 1:
                break
                
            parentIndex = nodeIndex // 2
            parentNode = self.minHeap[parentIndex]
            
            if parentNode.value <= node.value:
                break
                
            self.swap(nodeIndex, parentIndex, self.minHeap)
            
            nodeIndex = parentIndex

            
    def delete(self, priority):
        node = None
        
        if self.size <= 0:
            return '비었습니다.'

        if priority == -1: # 최소힙
            node = self.bubbleDownMin()
            node.isDeleted = True
            self.size -= 1
            return node.value
            
        else:
            node = self.bubbleDownMax()
            node.isDeleted = True
            self.size -= 1
            return node.value
        
    def bubbleDownMax(self):
        resNode = None
        

        while True:
            if len(self.maxHeap) <= 1:
                break;

            resNode = self.maxHeap[1]
            lastNode = self.maxHeap.pop()

            if len(self.maxHeap) <= 1:
                break
                
            idx = 1
            self.maxHeap[1] = lastNode
            
            while True:
                l = idx * 2
                r = idx * 2 + 1

                # 자식 x
                if l >= len(self.maxHeap):
                    break;
                    
                # 자식 1(자식의 자식은 없다)
                if r >= len(self.maxHeap):
                    if self.maxHeap[l].value > lastNode.value:
                        self.swap(l, idx, self.maxHeap)
                        
                    break
                
                # 자식 2
                maxIndex = l if self.maxHeap[l].value >= self.maxHeap[r].value else r
                
                if self.maxHeap[maxIndex].value > lastNode.value:
                    self.swap(maxIndex, idx, self.maxHeap)
                    idx = maxIndex
                    
                else:
                    break
                
            
            # 루트가 짭이 아니라면 몀춘다.
            if resNode.isDeleted == False:
                break

        return resNode
    

    def bubbleDownMin(self):
        resNode = None

        while True:
            if len(self.minHeap) <= 1:
                break;

            resNode = self.minHeap[1]
            lastNode = self.minHeap.pop()
            
            if len(self.minHeap) <= 1:
                break
                
            idx = 1
            self.minHeap[1] = lastNode
            
            while True:

                l = idx * 2
                r = idx * 2 + 1

                # 자식 x
                if l >= len(self.minHeap):
                    break;
                    
                # 자식 1(자식의 자식은 없다)
                if r >= len(self.minHeap):
                    if self.minHeap[l].value < lastNode.value:
                        self.swap(l, idx, self.minHeap)
                    break
                
                # 자식 2
                maxIndex = l if self.minHeap[l].value <= self.minHeap[r].value else r
                
                if self.minHeap[maxIndex].value < lastNode.value:
                    self.swap(maxIndex, idx, self.minHeap)
                    idx = maxIndex
                    
                else:
                    
                    break
            # 루트가 짭이 아니라면 몀춘다.
            if resNode.isDeleted == False:
                break

        return resNode
    
    def swap(self, idx1, idx2, target):
        target[idx1], target[idx2] = target[idx2], target[idx1]
    
ADD = 'I'
DELETE = 'D'
testCount = int(input())

for i in range(testCount):
    commandCount = int(input())
    
    h = Heap()
    for j in range(commandCount):


        command, value = map(str, input().split())
        if command == ADD:
            h.add(int(value))
        elif command == DELETE and h.size != 0:
            h.delete(int(value))

     
    h.printT('min', h.minHeap)
    h.printT('max', h.maxHeap)

    if h.size == 0:
        print('EMPTY')
        
    elif h.size == 1:
        v = h.delete(1)
        
        print(v, v)
        
    else:
        _max, _min = h.delete(1), h.delete(-1)
        
        print(_max, _min)   
        
        