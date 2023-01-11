function solution(answers) {
    const supoja1 = [1, 2, 3, 4, 5];
    const supoja2 = [2, 1, 2, 3, 2, 4, 2, 5];
    const supoja3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    const result = new Array(3);
    
    result[0] = answers.filter((answer, i) => answer === supoja1[i % supoja1.length]).length;
    result[1] = answers.filter((answer, i) => answer === supoja2[i % supoja2.length]).length;
    result[2] = answers.filter((answer, i) => answer === supoja3[i % supoja3.length]).length;
    
    const maxScore = Math.max(...result);

    const a = result.reduce((finalResult, eachScore, i) => {
        if(maxScore === eachScore) finalResult.push(i+1);
        return finalResult;
    }, [])
    
    return a;
}

// 오름차순