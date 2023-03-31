function solution(name, yearning, photo) {
    const scores = {};
    name.forEach((n, i) => scores[n] = yearning[i]); // 객체로 만들기
    
    return photo.reduce((sum, eachPhoto) => {
       const eachSum = eachPhoto.reduce((s, n) => {
           if(Object.keys(scores).includes(n)) s += scores[n];
           return s;
       }, 0)
        sum.push(eachSum);
        return sum;
    }, [])
    
    
}