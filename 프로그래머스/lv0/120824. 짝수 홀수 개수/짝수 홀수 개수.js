function solution(num_list) {
    return num_list.reduce(([even, odd], num) => {
        if(num % 2 === 0) even++;
        else odd++;
        return [even, odd]
    }, [0,0])
}