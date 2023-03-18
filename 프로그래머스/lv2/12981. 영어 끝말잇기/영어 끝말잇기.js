function solution(n, words) {
    const set = new Set([...words]);
    if(set.size === words.length) {
        const i = isFail(words);
        if(i) return mekeResult(i, n);
        else return [0,0]; // 중복이 없는 경우.
    }
    
    const duplicatedWordIndex = findDup(words) + 1;
    return mekeResult(duplicatedWordIndex, n);
}

const mekeResult = (i, n) => {
    const outMember = i % n || n;
    const order = i % n ? Math.floor(i / n) + 1 : i / n;
    
    return [outMember, order];
}

const isFail = words => {
    let lastWord = '';
    let firstWord = '';
    
    for(let i = 1; i < words.length; i++) {
        const lastIndex = words[i-1].length -1;
        lastWord = words[i-1][lastIndex];
        firstWord = words[i][0];
        if(lastWord !== firstWord) return i+1;
    }
    
    return 0;
}

// 중복되는 단어의 두번째 위치를 찾는 함수
const findDup = words => {
    const set = new Set();
    let index = 0;
    
    for(let i =0 ; i< words.length; i++) {
        const beforeSetSize = set.size;
        set.add(words[i]);
        const afterSetSize = set.size;
        
        if(beforeSetSize === afterSetSize) {
            index = i;
            break;
        }
    }
    return index;
}

/*
중복되는 단어를 찾는다. 
중복되는 단어가 두번째로 나온 위치를 찾는다.
그 위치 % n으로 몇번 사람이 탈락자인지 찾고, 위치 / n +1 로 차례를 계산한다. 
*/