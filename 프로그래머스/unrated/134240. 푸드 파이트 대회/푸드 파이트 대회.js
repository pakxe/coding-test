function solution(food) {
    let table = '';
    for(let i = 1; i < food.length; i++) {
        table += i.toString().repeat(Math.floor(food[i]/2));
    }
    return `${table}0${table.split('').reverse().join('')}`;
}