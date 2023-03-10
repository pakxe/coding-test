function solution(s) {
    const splitSentences = s.split(' ');
    
    const editSentences = splitSentences.map((sentence) => {
        let editSentence = sentence.toLowerCase();
        return editSentence.replace(/^[a-z]/, char => char.toUpperCase());;
    })
    
    console.log(editSentences)
    return editSentences.join(' ');
}

/*
    0번째를 읽고 이게 영어 && 소문자면 바꿔서 리턴
*/