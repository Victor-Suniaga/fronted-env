import React, { memo } from 'react';
import { useDispatch } from 'react-redux';
import { searchReducer } from '../data/reducer/search.reducer';

import { SearchInput, SearchContainer, SearchButton } from './styled/searchInput';
import { Icon } from './styled/list';
const SearchBar = memo(() => {
    const dispatch = useDispatch();
    const onClick = () => {
            dispatch(searchReducer.get('Berlin'))
    }
    return (
        <SearchContainer>
            <SearchInput type="text"/>
            <SearchButton
                title="Search"
                onClick={onClick}
            >
                <Icon className="wi wi-direction-right"></Icon>
            </ SearchButton>
        </SearchContainer>
    );
})

export default SearchBar;
