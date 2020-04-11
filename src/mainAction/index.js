const shuffle = (array) => {
    for (let index = array.length - 1; index > 0; index--) {
        let val = Math.floor(Math.random() * (index + 1));
        [array[index], array[val]] = [array[val], array[index]];
    }
    return array
}

const detectWin = (array) => {
    let counts = {};

    array.forEach(val => { 
        counts[`${val%4}_col`] = (counts[`${val%4}_col`] || 0)+1;
        counts[`${Math.floor(val/4)}_row`] = (counts[`${Math.floor(val/4)}_row`] || 0)+1;
        if(val%5 === 0){
            counts['x_slash'] = (counts['x_slash'] || 0)+1
        }
        if(val%3 === 0 &&　val/3 < 5 && val/3 > 0){
            counts['y_slash'] = (counts['y_slash'] || 0)+1
        }
     });
     console.log(counts)
    const line = Object.values(counts).filter(val=>val>3).length
    return line >= 3
}

export {
    shuffle,
    detectWin
}