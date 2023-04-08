function solution(cards1, cards2, goal) {
    let result = 'Yes';
    
    cards1.reverse();
    cards2.reverse(); // pop을 사용하기 위해.. 
    
    for(let i = 0; i < goal.length; i++) {
        if(cards1[cards1.length - 1] === goal[i]) cards1.pop();
        else if(cards2[cards2.length - 1] === goal[i]) cards2.pop();
        else {
            result = 'No';
            break;
        }
    }
    
    return result;
}