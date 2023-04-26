function solution(topping) {
    const left = new Map();
    const right = new Set();
    
    let count = 0;
    
    for(let i = 0; i < topping.length; i++) {
        left.has(topping[i]) ? left.set(topping[i], left.get(topping[i]) + 1) : left.set(topping[i], 1);
    }
    
    for(let i = 0; i < topping.length; i++) {
        right.add(topping[i]); // 하나 뺏었다.
        left.set(topping[i], left.get(topping[i]) - 1); // 하나 뺏겼다.
        if(left.get(topping[i]) === 0) left.delete(topping[i]); // 만약 더이상 뺏길게 없다면 프로퍼티 삭제
        
        if(right.size === left.size) count++;
    }
    
    return count;
}

// function solution(topping) {
//     let count = 0;
    
//     let cakeB = []; //오른쪽
//     let cakeA = topping; //왼쪽
    
//     for(let i = 0; i < topping.length; i++) {
//         cakeB.push(topping.pop());
        
//         let a = new Set(cakeA);
//         let b = new Set(cakeB);
        
//         if(a.size === b.size) count++;
//     }
    
//     return count;
// }
// 길이 1일때도 판별

/*
for문으로 객체에 토핑프로퍼티를 추가한다. 만약 없으면 = 0 있으면 + 1

그리고 for 문을 돈다. 동생은 pop해서 가져간다. 
그리고 동생은 set을 사용한다. 
이때 가져가는 요소가 0개 이하라면 
*/

/*
가짓수를 어떻게 판단하지?
결국 커팅은 1번임 그러니까 가짓수를 생각하려면 그냥 set을 써서 하면된다. 
*/