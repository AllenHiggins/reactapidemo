import {combineReducers} from 'redux'

import {imageResultsReducer} from './imageResultsReducer'
import {searchReducer} from './searchReducer'
import {filmReducer} from './filmReducer'

export const reducers = combineReducers({
    imageResultsReducer,
    searchReducer,
    filmReducer
})