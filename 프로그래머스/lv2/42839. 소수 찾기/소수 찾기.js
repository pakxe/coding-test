function solution(numbers) {
    console.log(perm([1, 2, 3, 4], 0, 3));
}

const perm = (arr, count, size) => {
    if(count === size) return arr.map(a => [a]);
    console.log(arr)
    return arr.reduce((res, a, index) => {
        const now = a;
        
        // now를 제외한 배열
        const nextArr = [...arr.slice(0, index), ...arr.slice(index+1)];
        const nextResult = perm(nextArr, count+1, size);
        
        return nextResult.map(a => [now, ...a]);
    }, [])
}

/*
순서도 바꿀 수 있네..
결국 순서가 있는 완탐이면 순열을 쓰라는 거 같은데, 

size, arr, n, 
*/