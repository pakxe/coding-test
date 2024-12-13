import sys
input = sys.stdin.readline

class MaxHeap:
    def __init__(self):
        self.heap = []
        
    def size(self):
        return len(self.heap)
    
    def value(self, idx):
        return self.heap[idx]
    
    def push(self, value):
        self.heap.append(value)
        self.bubble_up()
        
    def swap(self, idx1, idx2):
        self.heap[idx1], self.heap[idx2] = self.heap[idx2], self.heap[idx1]
        
    def bubble_up(self):
        curIndex = self.size() - 1
        curValue = self.value(curIndex)
        
        while True:
            i = (curIndex - 1) // 2
            parentIndex = 0 if i < 0 else i
            
            if self.value(parentIndex) < curValue:
                self.swap(parentIndex, curIndex)
                curIndex = parentIndex
                
            else:
                break
    
    def pop(self):
        if self.size() == 0:
            return 0
        
        elif self.size() == 1:
            return self.heap.pop()
        
        rootValue = self.heap[0]
        self.heap[0] = self.heap.pop()
        
        self.bubble_down()

        return rootValue
        
    def bubble_down(self):
        curIndex = 0
        curValue = self.heap[curIndex]
        
        while True:
            leftChildIndex = curIndex * 2 + 1
            rightChildIndex = curIndex * 2 + 2

            # 자식 0
            if leftChildIndex >= self.size(): # 왼쪽자식 인덱스가 사이즈 초과
                break;
                
            # 자식 1
            elif rightChildIndex >= self.size():
                if self.value(leftChildIndex) > curValue:
                    self.swap(leftChildIndex, curIndex)
                    
                break;
                
            # 자식 2
            maxIndex = leftChildIndex if self.value(leftChildIndex) > self.value(rightChildIndex) else rightChildIndex
            
            if self.value(maxIndex) > curValue:
                self.swap(maxIndex, curIndex)
                curIndex = maxIndex
                
            else: 
                break
                
maxHeap = MaxHeap()

n = int(input())

for _ in range(n):
    command = int(input())
    
    if command == 0:
        print(maxHeap.pop());
    else:
        maxHeap.push(command)
        
        
    