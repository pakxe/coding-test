function solution(maps) {
    return dfs(maps, [0, 0, 1]);
}

const dfs = (graph, start) => {
    const dx = [0, 1, 0, -1];
    const dy = [1, 0, -1, 0];
    
    let total = 0;
    
    const needVisit = [];
    
    needVisit.push(start);
    
    while(needVisit.length !== 0) {
        const curSpot = needVisit.shift(); 
        
        if(curSpot[0] === graph.length - 1 && curSpot[1] === graph[0].length - 1) return curSpot[2]; // 총 걸음수 반환
        for(let i = 0; i < dx.length; i++) {
            const nx = curSpot[1] + dx[i];
            const ny = curSpot[0] + dy[i];
            if(nx >= 0 && ny >= 0 && nx <= graph[0].length - 1 && ny <= graph.length - 1 && graph[ny][nx] === 1) {
                needVisit.push([ny, nx, curSpot[2] + 1]);
                graph[ny][nx] = 0;
            }
        }
    }
    
    return -1;
}

