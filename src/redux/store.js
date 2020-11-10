import {createStore} from 'redux'
import moviesReducer from './moviesReducer'
import { devToolsEnhancer } from 'redux-devtools-extension'

export default createStore(moviesReducer, devToolsEnhancer())