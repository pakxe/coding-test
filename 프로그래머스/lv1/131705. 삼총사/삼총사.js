function solution(number) {
    const a = [];
    const arr = new Array(number.length).fill(0).map(_ => new Array(number.length).fill(0));
    let triple = 0;
    for(let i = 0; i < number.length - 1; i++){
        for(let j = i + 1; j < number.length; j++) {
            const sum2 = number[i] + number[j];
            const matchCount = number.filter((n, index) => index!==i && index!==j && n===(0-sum2)).length;
            if(matchCount) triple+= matchCount;
        }
    }
    return triple ? triple/3 : 0;
    //아 근데 같은 값 갖는 친구도 있다매
    // 자기 자신을 제외해야함
}

/*
[x] 2개 끼리 더한 배열을 만든다
[ ] 만든 배열을 똑같이 순회한다. 
[ ] 0 - (이때 가져온값) 이 number에 있다면 삼총사 수를 1늘린다.
*/

// 12 13 14 15
//    23 24 25
//       34 35
//          45
// j : 1 2 3 4..
// j : 2345 345 45 5???? 이건 for