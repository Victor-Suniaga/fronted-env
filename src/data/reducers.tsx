/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers, Reducer } from 'redux';
import searchReducer from './reducer/search.reducer';
import { Climate } from './reducer/search.reducer';

export interface RootStore {
    search: Climate
} 

export default function createReducer() {
    const rootReducer: Reducer<RootStore> = combineReducers({
        search: searchReducer,
    });

    return rootReducer;
}