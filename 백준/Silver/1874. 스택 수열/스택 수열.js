const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [PUSH, POP] = ['+', '-'];
const INVALID = 'NO';

/*
그냥 순열의 그래프가 공장 모양 그래프면 가능한 것같다.

스택의 push하는 값들은 그냥 1부터 n까지의 오름차순

pop한 순서대로 주어진 수열을 만족할 수 있는지 판단해야한다.

수열을 읽고 있는 커서 인덱스를 let으로 두어야 한다. 
스택에 넣어야 하는 값도 let으로 두어야 한다.

스택의 탑이 비어있다면 push한다. 
수열 커서보다 스택 커서가 작다면 push한다.

스택의 탑이 수열 커서와 똑같다면 pop한다.
스택의 탑이 수열 커서보다 크다면 pop한다.

만약 수열 커서가 남아있는데 스택이 비워져있다면 스택으로 만들 수 없는 것
*/

const n = Number(input[0]);

const answers = input.slice(1).map(Number)
let answersIndex = 0;

const stack = [];
let stackIndex = 1;

const results = [];
let isInvalid = false;

while (true) {
    // 성공
    if(answersIndex === n && stackIndex === n + 1) break;
    
    // 스택이 길이가 없거나, 수열 커서보다 스택 탑이 작다면 push
    if(stack.length === 0 || stack[stack.length - 1] < answers[answersIndex]) {
        stack.push(stackIndex);
        stackIndex++;
        
        results.push(PUSH);
    }
    
    if(stack[stack.length - 1] === answers[answersIndex]) {
        stack.pop();
        answersIndex++;
        
        results.push(POP);
    }

    if(stack[stack.length - 1] > answers[answersIndex]) {
        // console.log(stack, answers[answersIndex])
        isInvalid = true;
        break;
    }
    
    // 모든 수를 넣은 상태에서 스택의 탑과 수열 수가 일치하지 않는 경우
    if(stackIndex === n + 1 && (stack[stack.length - 1] !== answers[answersIndex])) {
        isInvalid = true;
        break;
    }

    /*
    뽑아야하는 수와 수열 수가 일치하지 않는 경우에 대해서 다뤄지지 않고 있다.

    일치하지 않는 경우 1 = 수열 수보다 스택 탑이 큰 경우) 뽑는다.
    일치하지 않는 경우 2 = 수열 수보다 스택 탑이 작은 경우) push한다.

    

    
    
     
    */

    /*
    console.log(stack);
    console.log(results + '\n');
    */
}

console.log(isInvalid ? INVALID : results.join('\n'))


/*
5
4
1
3
2
5



*/
