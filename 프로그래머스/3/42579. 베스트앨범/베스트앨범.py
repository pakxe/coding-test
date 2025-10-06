import heapq 

def solution(genres, plays):
    infos = {}
    
    for i in range(len(genres)):
        genre = genres[i]
        play_c = plays[i]
        
        if genre in infos:
            infos[genre]['total_count'] = infos[genre]['total_count'] + play_c
            
            if len(infos[genre]['q']) <= 1:
                heapq.heappush(infos[genre]['q'], (play_c, i))
            
            else:
                top_c, top_id = infos[genre]['q'][0]
                
                if top_c < play_c:
                    heapq.heappop(infos[genre]['q'])
                    heapq.heappush(infos[genre]['q'], (play_c, i))
                
        else:
            d = {}
            d['total_count'] = play_c
            d['q'] = [(play_c, i)] # (개수, id)
            infos[genre] = d
        
    arr = []
    for key in infos:
        d = infos[key]
        
        arr.append((d['total_count'], key))
        
    sorted_arr = sorted(arr, reverse=True)
    
    res = []
    for i in range(0, len(sorted_arr)):
        c, genre = sorted_arr[i]
        
        if len(infos[genre]['q']) <= 1:
            _, id_ = infos[genre]['q'][0]
            
            res.append(id_)
        else:
            sorted_q = sorted(infos[genre]['q'], key=lambda s: (-s[0], s[1]))
            for j in range(len(sorted_q)):
                res.append(sorted_q[j][1])
            
    return res