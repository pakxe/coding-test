const NUM_WORD = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

function solution(s) {
    let str = s;
    NUM_WORD.map((word, i)=> {
        const regex = new RegExp(`${word}`, 'g');
        const replacedStr = str.replace(regex, i);
        str = replacedStr;
    });
    return Number(str);
}
/*다보는방법
s를 쪼개서 돈다.
영어를 발견하면 저장한다. 
이 섭단어가 넘워드에 있는지 본다.
    없으면 s를 이어서 돌자
    있으면(정확히일치) 스타트에서 

*/

/*똑똑한메서드발견..
정규식에 변수를 어떻게 넣는지 알아야할거같다
정규식으로 replaceAll메서드를 구현한다.
모든 num-word를 돈다.
*/