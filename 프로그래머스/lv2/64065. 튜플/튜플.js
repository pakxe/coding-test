function solution(s) {
    const arr = s.slice(2, s.length - 2).split('},{').map(nums => nums.split(',').map(Number));
    arr.sort((a, b) => a.length - b.length);
    
    const set = new Set();
    const result = [];
    
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr[i].length; j++) {
            const before = set.size;
            set.add(arr[i][j]);
            const after = set.size;
            if(before !== after) {
                result.push(arr[i][j]);
                break;
            }
        }
    }
    
    return result;    
}
/*
    길이대로 배열하고 순서대로 출력하면 될 것같다. 
    조건이 많았네..
    
    set을 하나만든다.
    add했는데 길이가 달라진거라면 그 숫자 기록
    길이가 안달라진거면 이미 있는거니까 그냥 넘어가기 
    
*/