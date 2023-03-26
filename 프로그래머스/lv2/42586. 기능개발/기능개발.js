function solution(progresses, speeds) {
    // 각 기능별 배포 가능일
    const days = progresses.map((p, i) => Math.ceil((100 - p)/speeds[i])); 
    const pushDay = [];
    
    let start = days[0];
    let utils = 1;
    
    for(let i = 1; i < days.length; i++) {
        // 시작보다 큰 일정 발견
        if(start < days[i]) {
            pushDay.push(utils);
            
            start = days[i];
            utils = 1;
        }
        else {
            utils++;
        }
    }
    
    pushDay.push(utils);

    return pushDay;
}

/*
일단 각 기능별 배포일을 배열에 담기 
배포일이 시작보다 클 때까지 쭉 읽는다.
시작보다 큰 일정을 만나면 새로운 날에 배포하는 게 된다. 

5, (10, 1, 1), (20, 1)
*/