function solution(order) {
    order = order.reverse();
    const main = new Array(order.length).fill(0).map((_, i) => i+1).reverse(); // 오름차순 컨테이너
    let count = 0;
    let cur = order[order.length - 1];
    const sub = [];
    
    while(1) {
        // 메인에 있는경우
        if(!isEmpty(main) && main[main.length - 1] === cur ) {
            count++;
            order.pop();
            cur = order[order.length - 1];
            main.pop();
        }
        // 메인에 없는 경우
        else {
            // 서브에 있는 경우
            if(!isEmpty(sub) && sub[sub.length - 1] === cur) {
                count++;
                order.pop();
                cur = order[order.length - 1];
                sub.pop();
            }
            // 서브에 없는데 메인에 상자가 남아있는 경우
            else if(!isEmpty(main)) {
                sub.push(main.pop());
            }
            // 서브에도 없고 메인에도 상자가 없는 경우 
            else {
                break;
            }
        }
    }    
    
    return count;
}

const isEmpty = stack => {
    return stack.length === 0
}