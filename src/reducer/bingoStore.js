import { shuffle } from '../mainAction'

const originArray = shuffle(Array.from(Array(16).keys(), x=>x+1));

const initialState = {
    inputValue: '',
    originArray: originArray
};

const bindoReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INPUT_CHANGE':
            return {
                ...state,
                inputValue: action.inputValue
            };
        case 'DECREMENT':
            return {
                ...state
            };
        default:
            return state;
    }
}

export default bindoReducer