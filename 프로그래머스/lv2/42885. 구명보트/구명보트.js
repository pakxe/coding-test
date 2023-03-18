function solution(people, limit) {
    let boats = 0;
    people.sort((a, b) => b - a); // 내림차순
    
    let start = 0; // 가장 무거운 사람
    let end = people.length - 1; // 가장 가벼운 사람
    
    while(start < end) { // 등호가 없는 이유는 등호가 있으면 한사람을 두명 태우는 꼴이 될 수도 있으므로
        if(people[start] + people[end] <= limit) {
            boats++; // 제일 가볍고, 무거운 사람을 태웠다.
            end-=1; 
            start+=1;
        }
        else {
            boats++; // 제일 무거운 사람과 같이 탈 사람이 없으므로 이 사람만 태워 보낸다.
            start+=1;
        }
    }
    if(start === end) boats++;
    return boats;
    
}