function solution (need, refill, have) {
    let cola = 0;
    while(have >= need) {
        cola += parseInt(have / need) * refill;
        have = parseInt(have / need) * refill + have % need;
    }
    return cola;
}