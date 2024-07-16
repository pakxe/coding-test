/*
연세대학교의 영문명은 YONSEI, 슬로건은 Leading the Way to the Future이다.
*/ 

const input = Number(require('fs').readFileSync('/dev/stdin').toString().trim());

if(input === 0) console.log('YONSEI');
else if(input === 1) console.log('Leading the Way to the Future')