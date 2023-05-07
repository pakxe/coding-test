const [IN, OUT] = ['IN', 'OUT']; // 바뀔걸 대비해서..

function solution(fees, records) {
    const parking = new Map();
    const result = new Map();
    
    records.forEach(record => {
        const [time, carNum, type] = record.split(' ');
        
        if(type === IN) parking.set(carNum, timeToMinutes(time));
        if(type === OUT) {
            const inTime = parking.get(carNum);
            parking.delete(carNum);
            result.set(carNum, result.get(carNum) ? result.get(carNum) + timeToMinutes(time) - inTime : timeToMinutes(time) - inTime);

        }
    })
    
    
    if(parking.size !== 0) {
        parking.forEach((value, key) => {
        result.set(key, result.get(key) ? result.get(key) + timeToMinutes('23:59') - value : timeToMinutes('23:59') - value);
    })
    }
    
    const totalFees = new Map();
    
    result.forEach((value, key) => totalFees.set(key, calcFee(value, fees)))
    console.log( [...totalFees].sort((a, b) => a[0] - b[0]).map(a => a[1]))
    return [...totalFees].sort((a, b) => a[0] - b[0]).map(a => a[1])
}

const timeToMinutes = time => {
    const [hour, min] = time.split(':').map(Number);
    
    return hour * 60 + min;
}

const calcFee = (time, fees) => {
    const [basic, basicFee, unit, unitFee] = fees;
    
    if(time <= basic) return basicFee;
    return basicFee + Math.ceil((time - basic) / unit) * unitFee;
}

/*
객체에 차량 번호를 키로 해서 입차 시간을 프로퍼티 값으로저장한다. 
그렇게 입출차 기록을 읽다가 출차기록이 오면 입차 시간을 저장해놓고 delete 하고 결과 맵에 요금을 푸시한다. 

입출차기록을 다 읽었으면  맵에 남아있는 것들을 순환하면서 결과 맵에 요금을 푸시한다 이때 시간은 23 59

맵을 배열에 넣고 차량번호로 sort한다. 



*/