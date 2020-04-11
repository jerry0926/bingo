import { createStore } from 'redux'
import bindoReducer from './bingoStore'

const store = createStore(bindoReducer);

export default store