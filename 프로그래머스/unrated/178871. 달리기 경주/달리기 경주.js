function solution(players, callings) {
    const nameKeyMap = new Map();
    const scoreKeyMap = new Map();
    
    players.forEach((player, i) => { // 1
        nameKeyMap.set(player, i);
        scoreKeyMap.set(i, player);
    }) 
    
    callings.forEach((추월자) => { // 2
        const 추월자의순위 = nameKeyMap.get(추월자); // 2
        const 추월당할자의이름 = scoreKeyMap.get(추월자의순위 - 1); // 3
        
        nameKeyMap.set(추월당할자의이름, 추월자의순위); // 4
        nameKeyMap.set(추월자, 추월자의순위 - 1); // 5
        
        scoreKeyMap.set(추월자의순위, 추월당할자의이름); // 6
        scoreKeyMap.set(추월자의순위 - 1, 추월자); // 7
    })
    
    const scoreArr = Array.from(scoreKeyMap); // sort하기위해 map을 배열로 변환
    
    scoreArr.sort((a, b) => a[0] - b[0]); // 순위 오름차순으로 sort
    
    return scoreArr.map(([_, name]) => name); // 이름만 return
}



    
/*

시간초과가 날 것 같은데..

어떻게 해야할까?

callings 배열을 하나씩 읽으면서 순서를 바꿔야 한다. 어떻게 해야할까?

1. 모든 배열에 순서를 달아준다. 
2. 콜링을 읽어서 그 사람이 몇번인지 찾는다. 그리고 그의 번호를 -1로 하고, 이 번호 -1인 사람의 번호를 +1로 한다. 
3. 그렇게 마지막까지 읽고 플레이어 배열을 오름차순으로 정렬해 출력한다. 


2번째로 map으로 푼 것도 실패
순서까지 맵으로 해야할 것같다, 그니까 value로 key를 찾는 것 또한. 맵으로 
*/