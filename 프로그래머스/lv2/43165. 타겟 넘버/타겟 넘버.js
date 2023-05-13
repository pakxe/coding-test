function solution(numbers, target) {
    let res = 0;
    
    const dfs = (index, sum) => {
        // 최고 깊이 도달
            if(index === numbers.length) {
                if(sum === target) res++;
            return;
        }
    
        dfs(index + 1, sum + numbers[index]);
        dfs(index + 1, sum - numbers[index]);
    }
    
    dfs(0, 0);
    return res;
}

