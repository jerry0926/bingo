import { shuffle, detectWin } from '../mainAction'

const originArray = shuffle(Array.from(Array(16).keys(), x=>x+1));

const initialState = {
    inputValue: '',
    originArray: originArray,
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
            
            if(action.insertType == 'index'){
                index = action.index
            }else{
                const valIndex = state.originArray.indexOf(Number(state.inputValue))
                if(valIndex > -1){
                    index = valIndex
                }
            }
            const newChooseArray = Array.from(new Set([...state.chooseArray, index]))
            const gameState = detectWin(newChooseArray)
            console.log(gameState)
            return {
                ...state,
                chooseArray: newChooseArray,
                gameState: gameState
            };
        case 'RESTART':
            return initialState;
        default:
            return state;
    }
}

export default bindoReducer