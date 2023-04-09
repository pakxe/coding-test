function solution(bridge_length, weight, truck_weights) {
    let clk = 0;
    const stack = [];
    let totalWeight = 0;
    
    while(!(stack.length === 0 && truck_weights.length === 0)) {
        for(let i = stack.length - 1; i >= 0; i--) {
            if(stack[i][1] === 1) {
                totalWeight -= stack[0][0];
                stack.shift();
            }
            else stack[i][1]--;
        }
                
        // 현재 다리를 건너는 트럭의 개수 === 다리 길이 || 현재 다리의 무게 + 트럭 무게 === 견딜 수 있는무게
        // 하나씩만 올라갈 수 있다. 
        if(!(stack.length === bridge_length || totalWeight + truck_weights[0] > weight || truck_weights.length === 0)) {
           
            totalWeight += truck_weights[0];
            stack.push([truck_weights[0], bridge_length]);
            truck_weights.shift();
        }
        
        clk++;
        
    }
    
    
    return clk;
}

/*
다리길이만큼의 트럭만 가능하다.현재 트럭의 위치도 저장해야하잖아.

초를 저장할 변수를 만들어서 계속한다.

while로 초수가 0이 아니고 스택이 비었을 때 종료한다. 

for로 다리를 건너는 트럭의 초수를 1씩 감소한다.

이 아래 도 while로 가능할 때까지 반복한다. 
    일단 대기트럭의 0번 무게 + 현재 다리의 무게 합한게 버틸 수 있는 무게보다 적으면 push한다. 
    이떄 남은 초 수와 함께 push한다. [무게, 초];



*/