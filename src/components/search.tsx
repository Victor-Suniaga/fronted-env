import React, { memo } from 'react';
import { useDispatch } from 'react-redux';
import { searchReducer } from '../data/reducer/search.reducer';

const SearchBar = memo(() => {
    const dispatch = useDispatch();
    const onClick = () => {
            dispatch(searchReducer.get('Berlin'))
    }
    return (
        <button
            title="Search"
            onClick={onClick}
        />
            
    );
})

export default SearchBar;
