function solution(sizes) {
    const sortedSizes = sizes.map(size => {
        const [width, height] = size;
        
        if(width <= height) return [height, width];
        else return size;
    })
    
    const widthMax = Math.max(...sortedSizes.map(([width, _]) => width));
    const heightMax = Math.max(...sortedSizes.map(([_, height]) => height));
    
    return widthMax * heightMax;
}