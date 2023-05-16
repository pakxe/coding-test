const [FIELD, OBSTACLE, GORL, START] = ['.', 'D', 'G', 'R'];

const bfs = (graph, start) => {
    const needVisit = [start];
    const visited = Array(graph.length + 1).fill(0).map(() => Array(graph[0].length + 1).fill(0));
    
    while(needVisit.length) {
        const [y, x, count] = needVisit.shift(); // 현재 위치
        if(graph[y][x] === GORL) return count;
        if(visited[y][x] === 0) {
            // 아직 방문 안했다면
            visited[y][x] = 1; // 방문
            
            const locations = getLocations(graph, [y, x]);
            const locationsAddCount = locations.map(([y, x]) => [y, x, count + 1]);
            
            needVisit.push(...locationsAddCount);
                        
        }
    }
    return -1;
}

const getRightEnd = (map, start) => {
    const [y, x] = start;
    
    for(let i = x; i < map[0].length; i++) {
        if(map[y][i] === OBSTACLE) return [y, i - 1]; // 장애물 바로 앞
    }
    
    return [y, map[0].length - 1]; // 벽
}

const getLeftEnd = (map, start) => {
    const [y, x] = start;
    
    for(let i = x; i >= 0; i--) {
        if(map[y][i] === OBSTACLE) return [y, i + 1]; // 장애물 바로 앞
    }
    
    return [y, 0]; // 벽
}

const getBottomEnd = (map, start) => {
    const [y, x] = start;
    
    for(let i = y; i < map.length; i++) {
        if(map[i][x] === OBSTACLE) return [i - 1, x];
    }
    
    return [map.length - 1, x];
}

const getTopEnd = (map, start) => {
    const [y, x] = start;
    
    for(let i = y; i >= 0; i--) {
        if(map[i][x] === OBSTACLE) return [i + 1, x];
    }
    
    return [0, x];
}

const getLocations = (map, start) => {
    const locations = [];
    
    locations.push(getRightEnd(map, start))
    locations.push(getLeftEnd(map, start))
    locations.push(getTopEnd(map, start))
    locations.push(getBottomEnd(map, start))
    
    return locations;
}

const getStart = map => {
    for(let i = 0; i < map.length; i++) {
        for(let j = 0; j < map[0].length; j++) {
            if(map[i][j] === START) return [i, j];
        }
    }
}

function solution(board) {
    const map = board.map(a => a.split(''));
    const [startY, startX] = getStart(map);
    
    return (bfs(map, [startY, startX, 0]));
    
}

/*
현재 위치에서 사방으로 방향을 선택하고 쭉 미끄러지는 것. 
그리고 그 미끄러진 위치에서도 다시 이 짓을 반복하다가

제일 처음 만났다면 그게 골. 

아니라면 그냥 return -1

사방으로 가는 코드를 구해야할 것 같다. 

D를 만나거나 끝(0)이거나.

*/