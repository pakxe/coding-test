function solution (need, refill, have) {
    let cola = 0;
    while(1) {
        if(have < need) break;
        if(have % need === 0) {
            have = (have/need)*refill;
            cola += have;
        } else {
            const keep = have % need;
            have = Math.floor(have/need)*refill;
            cola += have;
            have += keep;
        }
    }
    return cola;
}