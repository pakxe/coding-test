function solution(str1, str2) {
    const lowerStr1 = str1.toLowerCase();
    const lowerStr2 = str2.toLowerCase();
    
    const result = [];
    const map1 = getMap(lowerStr1);
    const map2 = getMap(lowerStr2);
    
    const 교집합 = 교집합구하기(map1, map2); // 정수합
    const 합집합 = 합집합구하기(map1, map2); // 정수합
    
    if(!교집합 === 0 && 합집합 !== 0) return 0;
    
    return 합집합 === 0 ? 65536 : Math.floor(교집합/합집합 * 65536);

    
}

const 교집합구하기 = (map1, map2) => {
    let sum = 0;
    
    for (const [key, value] of map2) {
        if(map1.has(key)) sum += Math.min(map1.get(key), value);
    }
    
    return sum;
}

const 합집합구하기 = (map1, map2) => {
    for (const [key, value] of map2) {
        if(map1.has(key)) map1.set(key, Math.max(map1.get(key), value));
        else map1.set(key, value);
    }
    
    let sum = 0;
    map1.forEach(value => sum+=value)
    return sum;
}

const getMap = str => {
    const map = new Map();
    
    for(let i = 0; i < str.length - 1; i++) {
        const duo = str[i] + str[i+1];
        if(!checkEng(duo)) continue
        
        else map.set(duo, (map.get(duo) || 0) + 1);
    }
    
    return map;
}

function checkEng(str){
    const regExp = /[a-zA-Z]/g; // 영어
    
    for(let i = 0; i < str.length; i++) {
        if(!regExp.test(str))
            return false;
        }
    return true;
}

/*
교집합/합집합

현재 글자 쌍에 영어가 아닌 값이 포함되어 있을경우 pass

이때 소문자로 만드는 .toLowerCase() 사용
교집합 구하는방법은 그냥 str1을 쪼개고 저 문자열이 있는지 includes 사용. 있으면 추가
합집합은 
두 배열을 각각 순회해서 map으로 몇개씩 있는지 만든다..

1맵을 순회하면서 2맵에 없으면 추가, 있으면 크기비교해서 추가. 
만들어진 결과 맵을 돌면서 숫자들 합쳐서 합집합 크기 구하기

*/