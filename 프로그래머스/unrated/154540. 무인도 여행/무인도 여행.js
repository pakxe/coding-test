const SEA = 'X';

function solution(maps) {
    const islands = [];
    maps = maps.map(row => row.split(''));
    for(let i = 0; i < maps.length; i++) {
        for(let j = 0; j < maps[0].length; j++) {
            if(maps[i][j] !== SEA) islands.push(bfs(maps, [i, j]));
        }
    }
    
    return islands.length === 0 ? [-1] : islands.sort((a, b) => a - b)
}

const bfs = (graph, start) => {
    const dx = [0, 1, 0, -1];
    const dy = [1, 0, -1, 0];
    
    const needVisit = [];
    let serviveDays = 0;
    needVisit.push(start);
    
    while(needVisit.length !== 0) {
        const [y, x] = needVisit.shift();
        if(graph[y][x] !== SEA) {
            serviveDays += parseInt(graph[y][x]);
            graph[y][x] = SEA; // 이미 방문함
            
            for(let i = 0; i < dx.length; i++) {
                const nx = x + dx[i];
                const ny = y + dy[i];
                
                if(nx >= 0 && ny >= 0 && nx <= graph[0].length - 1 && ny <= graph.length - 1 && graph[ny][nx] !== SEA) {
                     needVisit.push([ny, nx])
                }
            }
        }
        
    }
    
    return serviveDays;
}