function solution(lottos, win_nums) {
    const matchNumbers = lottos.filter((lotto) => win_nums.includes(lotto)).length;
    console.log(7-matchNumbers)
    const unknownNumbers = lottos.filter((lotto) => lotto === 0).length;
    console.log(unknownNumbers)
    if(matchNumbers === 6) return [1, 1]
    if(matchNumbers === 0 && unknownNumbers=== 0) return [6,6]
    return [7-(matchNumbers+unknownNumbers), matchNumbers ? 7-matchNumbers : 6]
}
//2 2/