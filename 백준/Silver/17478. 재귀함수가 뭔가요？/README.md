https://www.acmicpc.net/problem/17478
![](https://velog.velcdn.com/images/pakxe/post/f9a9fb7f-e94a-4dae-8955-8db6ed38527b/image.png)
![](https://velog.velcdn.com/images/pakxe/post/814cf8cc-dc1d-416a-a6b3-89f3e1ecbc1c/image.png)

## 알고리즘 분류
- 재귀
- 구현

## 풀이
재귀에 대해서 공부할 수 있는 문제다. 

일단 제일 처음 문장인 '어느 한 컴퓨터공학과... ' 는 재귀되지 않으므로 재귀 함수 밖에서 출력한다. 

입력된 N의 개수만큼 
```
"재귀함수가 뭔가요?"
"잘 들어보게. 옛날옛날 한 산 꼭대기에 이세상 모든 지식을 통달한 선인이 있었어.
마을 사람들은 모두 그 선인에게 수많은 질문을 했고, 모두 지혜롭게 대답해 주었지.
그의 답은 대부분 옳았다고 하네. 그런데 어느 날, 그 선인에게 한 선비가 찾아와서 물었어."
```

를 반복해야 하므로 이 문장들은 재귀 함수 내부에 넣는다. 그리고 재귀 횟수만큼 '____'가 반복되어야 하므로 재귀 횟수도 함수의 인자에 필요할 것이다. 
또한 목표한 만큼 재귀를 했는지 알기 위해 N도 전달해줘야 한다. 
따라서 함수의 인자는 **현재 재귀 카운트, 목표 재귀 횟수** 이렇게 2개가 필요하다. 

재귀 종료 전 마지막으로
```
"재귀함수가 뭔가요?"
"재귀함수는 자기 자신을 호출하는 함수라네"
라고 답변하였지.
```
가 출력되어야 한다. 따라서 이 문장은 종료 조건문 안에 넣으면 되겠다. 

재귀에서 파악해야할 것은 
1. 무엇이 반복되지 않는지
2. 무엇이 반복되고 있는지
3. 무엇이 종료조건인지( + 마지막으로 실행할 것 )

이 문제에서는
1. "어느 한 컴퓨터 공학과..."
2. "재귀함수가 뭔가요?" "잘 들어보게..."
3. "재귀함수가 뭔가요?" "재귀함수는..."
이것들이 답이다. 

## 코드
```
var fs = require("fs");
var input = fs.readFileSync("/dev/stdin").toString().trim();
var N = parseInt(input); //숫자형 데이터면 parseInt로 명시적 형변황을 해줘야한다.
var under = "____";

var recur = function(from, to) {
  if(from === to){
    console.log(
      under.repeat(from)+'"재귀함수가 뭔가요?"\n'+
      under.repeat(from)+'"재귀함수는 자기 자신을 호출하는 함수라네"\n'+
      under.repeat(from)+'라고 답변하였지.'
    );
    return;
  }
  console.log(
    under.repeat(from)+'"재귀함수가 뭔가요?"\n'+
    under.repeat(from)+'"잘 들어보게. 옛날옛날 한 산 꼭대기에 이세상 모든 지식을 통달한 선인이 있었어.\n'+
    under.repeat(from)+'마을 사람들은 모두 그 선인에게 수많은 질문을 했고, 모두 지혜롭게 대답해 주었지.\n'+
    under.repeat(from)+'그의 답은 대부분 옳았다고 하네. 그런데 어느 날, 그 선인에게 한 선비가 찾아와서 물었어."'
    );
  recur(from+1, to);
  console.log(under.repeat(from)+'라고 답변하였지.');
}

console.log(`어느 한 컴퓨터공학과 학생이 유명한 교수님을 찾아가 물었다.`);
recur(0, N);


```
