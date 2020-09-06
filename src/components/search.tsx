import React, { memo, useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchReducer } from '../data/reducer/search.reducer';

import { SearchInput, SearchContainer, SearchButton } from './styled/searchInput';
import { Icon } from './styled/list';

const cities = ['Berlin', 'London', 'Toronto', 'Madrid', 'Seoul', 'Tokyo'];
const SearchBar = memo(() => {
  const [value, setvalue] = useState('');

    const dispatch = useDispatch();
    const onClick = () => {
        if (cities.includes(value)) {
            dispatch(searchReducer.get(value))
        }
    }
    return (
        <SearchContainer>
            <SearchInput
                onChange={(e) => setvalue(e.target.value)}
                value={value} 
                type="text"/>
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
