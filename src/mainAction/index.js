
const onChange = () => {

}

const chooseBox = (type, val) => {
    if(type === 'value'){
        
    }else{
        console.log(val)
    }
}

const shuffle = (array) => {
    for (let index = array.length - 1; index > 0; index--) {
      let val = Math.floor(Math.random() * (index + 1));
      [array[index], array[val]] = [array[val], array[index]];
    }
    return array
}

export {
    chooseBox,
    onChange,
    shuffle
}