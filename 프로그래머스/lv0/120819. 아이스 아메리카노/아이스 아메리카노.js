function solution(money) {
    const cups = Math.floor(money / 5500);
    const etc = money % 5500;
    return [cups, etc];
}