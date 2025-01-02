class Node:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

n = int(input())

startNode = None
tree = {}

for i in range(n):
    p, l, r = map(str, input().split())
    
    node = Node(p)
    tree[p] = node
    
    if i == 0:
        startNode = p
    
    if l != '.':
        node.left = l
    if r != '.':
        node.right = r
        

def preorder(node, result):
    parentValue = node.value
    result.append(parentValue)
    
    if node.left != None:
        preorder(tree.get(node.left), result)
    if node.right != None:
        preorder(tree.get(node.right), result)
    
    return result

def inorder(node, result):
    parentValue = node.value
    
    if node.left != None:
        inorder(tree.get(node.left), result)

    result.append(parentValue)
    
    if node.right != None:
        inorder(tree.get(node.right), result)
        
    return result

def postorder(node, result):
    parentValue = node.value
    
    if node.left != None:
        postorder(tree.get(node.left), result)
    
    if node.right != None:
        postorder(tree.get(node.right), result)
        
    result.append(parentValue)

    return result
    

print(''.join(preorder(tree.get(startNode), [])))
print(''.join(inorder(tree.get(startNode), [])))
print(''.join(postorder(tree.get(startNode), [])))
    
    
    
    