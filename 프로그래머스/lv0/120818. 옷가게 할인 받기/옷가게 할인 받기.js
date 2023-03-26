function solution(price) {
    if(price >= 100000 && price < 300000) return Math.trunc(price * 0.95);
    else if(price >= 300000 && price < 500000) return Math.trunc(price * 0.90);
    else if(price >= 500000) return Math.trunc(price * 0.80);
    else return price
}