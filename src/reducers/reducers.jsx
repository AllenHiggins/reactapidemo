import {combineReducers} from 'redux'

import {imageResultsReducer} from './imageResultsReducer'
import {searchReducer} from './searchReducer'

export const reducers = combineReducers({
    imageResultsReducer,
    searchReducer
})