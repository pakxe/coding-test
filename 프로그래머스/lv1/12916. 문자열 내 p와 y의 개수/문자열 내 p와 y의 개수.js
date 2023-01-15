function solution(s){
    return s.split('').filter(c => c ==='p' || c==='P').length === s.split('').filter(c => c ==='y'|| c==='Y').length
}