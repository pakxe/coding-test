function solution(array, commands) {
    return commands.map(([start, end, pick]) => {
        const sliceArr = array.slice(start-1, end).sort((a, b) => a-b);
        return sliceArr[pick-1];
    })
}
