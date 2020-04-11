import { shuffle, detectWin } from '../mainAction'

const originArray = () => {
    const array = shuffle(Array.from(Array(16).keys(), x=>x+1));
    return array
}

const initialState = {
    inputValue: '',
    originArray: originArray(),
    chooseArray: [],
    gameState: false
};

const bindoReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INPUT_CHANGE':
            return {
                ...state,
                inputValue: action.inputValue
            };
        case 'CHOOSE_BOX':
            let index;
            
            if(action.insertType === 'index'){
                index = action.index
            }else{
                const valIndex = state.originArray.indexOf(Number(state.inputValue))
                if(valIndex > -1){
                    index = valIndex
                }
            }
            const newChooseArray = Array.from(new Set([...state.chooseArray, index]))
            const gameState = detectWin(newChooseArray)
            return {
                ...state,
                inputValue: '',
                chooseArray: newChooseArray,
                gameState: gameState
            };
        case 'RESTART':
            return {
                ...initialState,
                originArray: originArray()
            };
        default:
            return state;
    }
}

export default bindoReducer