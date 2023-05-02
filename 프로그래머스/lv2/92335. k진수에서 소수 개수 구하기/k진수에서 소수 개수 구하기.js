function solution(n, k) {
    const numStr = n.toString(k);
    let stack = [];
    let count = 0;
    
    for(let i = 0; i < numStr.length; i++) {
        if(stack.length !== 0 && numStr[i] === '0') {
            console.log(parseInt(stack.join('')))
            if(isPrimeNum(parseInt(stack.join('')))) count++;
            stack = [];
        }
        else if(numStr[i] !== '0') stack.push(numStr[i]);
    }

    if(isPrimeNum(parseInt(stack.join('')))) count++;
    return count;
}

const isPrimeNum = n => {
    if(n===1) return false;
    
    let nums = new Set;
    
    // 바로 다른 수가 약수라면 종료시켜도 되는데 다시 외우려고 친거..ㅜ
    for(let i = 1; i <= Math.ceil(Math.sqrt(n)); i++) {
        if( n % i === 0) {
            nums.add(i);
            if(n / i !== i)  nums.add(n/i);
        }
    }
    
    return nums.size === 2 ? true : false;
}


/*
스택에 쌓고 
0이 오면 그대로 count++; 
스택을 비운다. 

그리고 다시 세기 시작한다. 0이오면 마찬가디로 비운다. 

그리고 마지막에 count++하는데 이때 
*/