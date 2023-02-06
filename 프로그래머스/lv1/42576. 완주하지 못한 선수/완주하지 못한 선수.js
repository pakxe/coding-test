function solution(participant, completion) {
    const hash = [];
    participant.forEach(p => {
        hash[p] = hash[p] ? hash[p] + 1 : 1;
    })
    completion.forEach(p => {
        hash[p]--;
    })
    for(let key in hash) {
        if( hash[key] >= 1) return key;
    }
}