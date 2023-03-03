const have = '#';

function solution(wallpaper) {
    let result = [wallpaper.length, wallpaper[0].length,0,0];
    [sy, sx, ey, ex] = result;
    
    // ey, sy는 올바르게 구해지고 있다. x좌표들이 문제임. 
    wallpaper.forEach((row, i) => {
        if(row.includes(have) && row.indexOf(have) <= sx) sx = row.indexOf(have);
        if(row.includes(have) && row.lastIndexOf(have) >= ex) ex = row.lastIndexOf(have)+1;
        if(row.includes(have) && (i <= sy)) sy = i;
        if(row.includes(have) && (i >= ey)) ey = i+1;
    })
    
    return [sy, sx, ey, ex];
}