function solution(book_time) {
    const timeNum = timeToNum(book_time).sort((a, b) => a[0] - b[0]);
    const lastTime = 23 * 60 + 59 + 10;
    
    const room = [];
    let roomLen = 0;
    let maxRoomCount = 0;
    
    console.log(timeNum);
    for(let i = timeNum[0][0]; i <= lastTime; i++) {
        
        for(let j = 0; j < room.length; j++) {
            if(room[j] === i) roomLen--; // 나갈 시간이라면 내보낸다. 
        }
        
        while(timeNum.length !== 0 && timeNum[0][0] === i) {
            room.push(timeNum[0][1]);
            roomLen++;
            maxRoomCount = Math.max(roomLen, maxRoomCount);
            
            timeNum.shift();
        }
        
    }
    return maxRoomCount;    
}

const timeToNum = arr => {
    return arr.map(([start, end]) => {
        const [startHour, startMin] = start.split(':').map(Number); //15, 0
        const [endHour, endMin] = end.split(':').map(Number); //15, 0
        
        return [startHour * 60 + startMin, endHour * 60 + endMin + 10];
    })
}
/*
시간을 for로 반복한다. 이때 시간을 그냥 자연수로 바꾸는게 좋을 것 같은데. +10
그리고 오름차순으로 정렬. 

배열 첫 시간부터 시작한다. 

(큐인것같다.)
배열을 while로 순회하는데, 현재 시간이 예약시간이 아닐 때까지(중복 시간예약이있ㅇ르 수 잇으니까) 반복한다. 
종료시간을 넣는게 좋을 것 같은데, 

일단 크게보자. 
시간을 for로 순회한다.
만약 종료시간인게 있다면 꺼낸다. 

일치하는 시간에 예약이 있으면 추가한다. 
꺼내고 추가하는 순서여야할것같다. 

이때 호텔의 개수는 max라고 따로 변수를 만들어서 관리한다. 
*/