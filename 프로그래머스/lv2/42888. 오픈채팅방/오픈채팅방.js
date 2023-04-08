const [ENTER, LEAVE, CHANGE] = ['Enter', 'Leave', 'Change'];
const [IS_ENTER, IS_LEAVE] = [1, 0];
const [WELCOME, GOODBYE] = ['님이 들어왔습니다.', '님이 나갔습니다.'];

function solution(record) {
    const map = {};
    const result = [];
    
    record.forEach((line) => {
        const [command, userId, nickName] = line.split(' ');
        
        if(command !== CHANGE) result.push([command, userId]);
        
        if(command !== LEAVE) map[userId] = nickName;
    })
    
    return result.map(([type, userId]) => {
        if(type === ENTER) return map[userId] + WELCOME;
        if(type === LEAVE) return map[userId] + GOODBYE;
    })
}

/*
어차피 배열은 두번 읽어야한다. 
유저아이디를 키값으로 하는 맵을 만들자.

배열을 순회한다.
enter면 출력배열에 추가하고, 아이디를 키갑승로 닉네임을 밸류로하는 셋을 추가한다. 
leave면 출력배열에 추가한다. 
change면 아이디를 키갑승로 닉네임을 밸류로하는 셋을 추가한다.

배열을 쭉 읽으면서.. 출력 배열을 만드는데 [1, id] [0, id] 형태로하자. 1은 들어온거고 2는 나가는거다. 
*/