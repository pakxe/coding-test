function solution(cards) {
    const groups = [];
    let index = 0; // 열 상자의 좌표
    let pickNum = cards[index]; // 다음 수의 인덱스
    
    while(pickNum) { // 0보다 큰 인덱스들은 아직 방문하지 않은 것
        pickNum = cards[index]; // 다음 수의 인덱스
        const curGroup = [pickNum]; // 그룹에 추가
        
        cards[index] = 0; // 방문 완료
        
        index = pickNum - 1;
        pickNum = cards[index]; // 새로운 카드 추가.
        
        while(pickNum !== 0) {
            curGroup.push(pickNum);
            cards[index] = 0;
            
            index = pickNum - 1;
            pickNum = cards[index];
        }
        
        groups.push(curGroup);
        
        index = cards.findIndex((num) => num > 0); 
        pickNum = cards[index];
    }
    
    if(groups.length === 1) return 0;
    const boxCountArr = groups.map((group) => group.length).sort((a, b) => b - a);
    
    return boxCountArr[0] * boxCountArr[1];
    
    
}

console.log(solution([2, 1]))

/*
 그룹들을 저장할 groups를 만든다. 
 상자 열림 여부를 판단할 open 배열 만들기 0으로 초기화하고 1이면 열린 걸로 판단한다. 
 
 const curGroup = []
 
 while로 isopen배열의 0첫번째 인덱스부터 출발한다. (0이존재 === 아직 방문안한 곳이 존재)
    let [pickNum, index] = cards[indexOf(0)], indexOf(0);
    curgroup pickNum 푸시
    카드에서 index를 0으로 교환한다. (방문했다는 의미)
    
    pickNum에 새로운 값을 할당한다. 현재 상자를 열고나온것
    
    while(pickNum !== 0) { // 여기서 연쇄적으로 상자를 여는 로직, 0으로 바뀌지 않았으면 갈 수 있다.
        현재 그룹에 픽넘버 추가
        pickNum = cards[pickNm - 1]; // 이동
        cards[index] = 0; // 방문 완료
        
        index = 픽넘(7)의 좌표
    }
    result.push (curgroup);
    curgroup = [];
    
*/