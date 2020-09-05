/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from 'redux';
import searchReducer from './reducer/search.reducer'


export default function createReducer() {
    const rootReducer = combineReducers({
        search: searchReducer,
    });

    return rootReducer;
}