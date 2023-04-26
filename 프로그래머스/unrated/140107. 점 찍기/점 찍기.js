function solution(k, d) {
    const edgeCount = Math.floor(d / k);
    let count = 0;
    
    for(let x = k; x < d; x = x + k) {
        const y = Math.floor(Math.sqrt(d**2 - x**2));
        count += Math.floor(y / k);
    }
    
    return count + edgeCount * 2 + 1;
}

/*
x좌표에서만 생각하자. 
원점과의 거리가 d니까 x의 최댓값은 d이다. 
그렇게 생각하고 수직으로 있는 점들의 개수를 세는 것이다. 
x = d 일때. x2 + y2 <= d2자나 
y2 <= d2 - x2인데, 만약 0이라면 y2또한 0이 될 수밖에 없지 


*/