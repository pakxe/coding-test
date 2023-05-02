function solution(skill, skill_trees) {
    const divideSkill = skill.split('');
    const sliceSkillTree = [];
    
    for(let i = 1; i <= divideSkill.length; i++) {
        sliceSkillTree.push(divideSkill.slice(0, i).join(''));
    }
    
    let count = 0;
    
    skill_trees.forEach(skills => {
        const stack = skills.split('').filter(skill => divideSkill.includes(skill));
        
        if(stack.length === 0) count++;
        else {
            if(sliceSkillTree.includes(stack.join(''))) count++;
        }
    })
    return count;
}

/*
const divideSkill = skill.split('');
    const restSkillTrees = skill_trees.map((skillTree) => skillTree.split('').filter(skill => {
        divideSkill.includes(skill);
    }));
    
    const sliceSkillTree = [];
    
    for(let i = 1; i <= divideSkill.length; i++) {
        sliceSkillTree.push(divideSkill.slice(0, i).join(''));
    }
    
    return restSkillTrees.filter(skillTree => sliceSkillTree.includes(skillTree.join(''))).length
*/
/*
    결국 저 스킬의 순서가 문자열에서 일치하는지 보면 되는거임. 
    나머지 문자는 다 빼고 봐도될거같은데,
    
    나머지 문자를 다 빼고 join해서 그게 
    아아아 일치랑 포함도 있네
    
    (str.includes('Java'));
*/