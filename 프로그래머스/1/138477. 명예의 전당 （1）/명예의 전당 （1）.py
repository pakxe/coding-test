'''
낮은거 뽑아주는 pq쓰는게 시복에서 유리할거임. 
명예의 전당 사이즈가 k미만이면 그냥 push함
k이상이라면 top을 봤을 때 현재 score 보다 크다면 pass하고, 낮으면 걔 뽑고 새점수 push
그리고 다시 top을 출력한다. 
'''
import heapq

def solution(k, score):
    pq = []
    
    ans = []
    for i in range(len(score)):
        cur_score = score[i]
        
        if len(pq) < k:
            heapq.heappush(pq, cur_score)
            
            top_score = pq[0]
            
            ans.append(top_score)
        
        else:
            top_score = pq[0]
            
            if top_score < cur_score:
                heapq.heappop(pq)
                heapq.heappush(pq, cur_score)
                ans.append(pq[0])
            
            else:
                ans.append(top_score)
                
    return ans
                
