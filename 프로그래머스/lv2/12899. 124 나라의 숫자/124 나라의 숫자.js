const newNum = [1, 2, 4];

function solution(n) {
    let number = 1;
    let oneCount = 0;
    
    while(1) {
        const threeNum = new Array(number + 1).fill(1);
        threeNum[threeNum.length - 1] = 0;
        
        if(n <= parseInt(threeNum.join(''), 3)) break;
        else number+=1;
    }
    
    
    for(let i = 0; i < number; i++) {
        n -= 3 ** i;
    }
    
    
    
    return n.toString(3).padStart(number, '0').split('').map(n => newNum[parseInt(n)]).join('')
}

/*
1 2 4
11 12 14
21 22 24
41 42 44
111 112 114

규칙성은 3.. 3으로 나눠야한다. 그게 세트임. 
3으로 나눈 나머지가 1이면 끝자리가 1이고 2면 2 0이면 4이다. 
몫이 1이면 1, 2면 2, 3이면 4, 4이면 계속 나누나?

*/