function solution(n, lost, reserve) {
    lost.sort((a, b) => a-b); // 정랼이 안되서 오는게 있었다,,!
    reserve.sort((a, b) => a-b);
    
    let total = n - lost.length;
    
    const editLost = lost.map(l => {
        const index = reserve.indexOf(l);
        console.log(index)
        if(index !== -1) {
            total++;
            reserve[index] = -1;
            return -1;
        }
        return l;
    })
    
    for(let i = 0; i < editLost.length; i++) {
        const student = editLost[i];
        
        if(reserve.includes(student - 1)) total++;
        else if(reserve.includes(student + 1)) {
            reserve[reserve.indexOf(student+1)] = -1; // 체육복 soldout!
            total++;
        }
    }
    return total;
}

/*
이게 왜 탐욕법이지? 지금 최선의 선택이 나중에는 안될수도있는데;;
맞긴한듯.
하나를 선택해서 두사람이 못입는 때는 없으니
일단 최선의 선택으로 앞에 사람이 있으면 앞에사람것을 빌리고
앞 사람이 없으면 뒷사람 것을 빌린다. 
*/