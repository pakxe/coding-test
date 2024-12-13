import sys
input = sys.stdin.readline


class MinHeap:
    def __init__(self):
        self.heap = []
        
    def size(self):
        return len(self.heap)
    
    def get(self):
        return self.heap

    def push(self, value):
        self.heap.append(value)
        self.bubble_up()
    
    def lastValue(self):
        return self.heap[self.size() - 1]
    
    def value(self, idx):
        return self.heap[idx]
        
    def swap(self, idx1, idx2):
        self.heap[idx1], self.heap[idx2] = self.heap[idx2], self.heap[idx1]
        
    def bubble_up(self):
        curIndex = self.size() - 1
        curValue = self.lastValue()
        
        while True:
            idx = (curIndex - 1) // 2
            parentIndex = 0 if idx < 0 else idx
            
            if curValue < self.value(parentIndex):
                self.swap(curIndex, parentIndex)
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
        curValue = self.value(curIndex)
        
        while True:
            smallest = curIndex
            l = curIndex * 2 + 1
            r = curIndex * 2 + 2
            
            if self.size() > l and self.value(l) < self.value(smallest):
                smallest = l
            if self.size() > r and self.value(r) < self.value(smallest):
                smallest = r
            if smallest != curIndex:
                self.swap(smallest, curIndex)
                curIndex = smallest
            else:
                break
            

minHeap = MinHeap()

n = int(input())

for _ in range(n):
    command = int(input())        
    
    if command == 0:
        print(minHeap.pop())
    else:
        minHeap.push(command)
                

                