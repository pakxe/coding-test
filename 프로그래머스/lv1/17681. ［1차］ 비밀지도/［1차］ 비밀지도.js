function solution(n, arr1, arr2) {
    const answerMap = new Array(n).fill('');
    
    const [map1, map2] = [decodeMap(arr1, n), decodeMap(arr2, n)];
    
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < n; j++) {
            isHaveWall(map1[i][j], map2[i][j]) ? answerMap[i] += '#' : answerMap[i] += ' ';
        }
    }
    
    return answerMap;
}

const isHaveWall = (room1, room2) => !(room1 === '0' && room2 === '0');

const decodeMap = (encodedMap, n) => {
    return encodedMap.map(binary => binary.toString(2).padStart(n, '0'));
}

// 하나라도 벽 존재 = 벽
// 공백은 두 지도 모두 일치해야 공백
/*
해독 지도 2차원 배열을 만든다.

힌트 지도 2개에서 벽이 하나라도 있는 경우 해독지도에 벽을 표시한다.
힌트 지도 2개에서 공백이 둘다 일치하는 경우 해독지도에 공백을 표시한다. 
(하나라도 벽이 있으면 벽인것 )
그렇게 만든 벽을 반환한다. 
*/