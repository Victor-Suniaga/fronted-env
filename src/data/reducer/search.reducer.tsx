import { createSlice, createAction } from '@reduxjs/toolkit';
  
function withPayloadType<T>() {
    return (t: T) => ({ payload: t })
};

export const searchReducer = {
    get: createAction('searchReducer/get', withPayloadType<string>()),
    getSuccess: createAction('searchReducer/getSuccess', withPayloadType<object>()),
    clean: createAction('searchReducer/clean'),
};
const initialState = {};

const searchSlice = createSlice({
    name: 'searchReducer',
    initialState,
    reducers: {
        getSuccess: (state, { payload }) => {
            return { ...state, ...payload?.response?.searchData }
        },
        clean: () => initialState,
    }
})


export default searchSlice.reducer;