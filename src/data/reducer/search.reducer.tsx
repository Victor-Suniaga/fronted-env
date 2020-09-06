import { createSlice, createAction, Slice } from '@reduxjs/toolkit';
  
function withPayloadType<T>() {
    return (t: T) => ({ payload: t })
};

export interface Forecast {
    day: number,
    symbol: {
        name: string
    },
    temperature: {
        value: number,
        min: number,
        max: number
    }
}
export interface Climate {
    location?: {
        name: string,
    },
    forecast?: Array<Forecast>
}

export const searchReducer = {
    get: createAction('searchReducer/get', withPayloadType<string>()),
    getSuccess: createAction('searchReducer/getSuccess', withPayloadType<object>()),
    clean: createAction('searchReducer/clean'),
};
const initialState: Climate = {};

const searchSlice: Slice<any> = createSlice({
    name: 'searchReducer',
    initialState,
    reducers: {
        getSuccess: (state, { payload }) => {
            return { ...state, ...payload }
        },
        clean: () => initialState,
    }
})


export default searchSlice.reducer;