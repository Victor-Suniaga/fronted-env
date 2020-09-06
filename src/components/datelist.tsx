import React from 'react';
import {
  Icon,
  ListContainer,
  ListElement,
  ListText,
} from './styled/list';
import { useSelector } from 'react-redux';

import { Climate } from '../data/reducer/search.reducer';
import { RootStore } from '../data/reducers';
import { symbolsMatch } from '../assets/constants';
import { getAverageTemp, AverageValues } from '../assets/utils';

interface Days {
    key: number,
    name: string,
}

const DateListValues = () => {

    const searchValue: Climate = useSelector((state:RootStore) => {
        return state.search;
    });
    const days: Days[] = [
        { key: 0, name: 'Monday'},
        { key: 1, name: 'Tuesday'},
        { key: 2, name: 'Wednesday'},
        { key: 3, name: 'Thursday'},
        { key: 4, name: 'Friday'},
    ]

    let result: AverageValues[] = [];
    if (searchValue.forecast && searchValue.forecast.length) {
        result = days.map(day => {
            const averageValues: AverageValues = 
                getAverageTemp(searchValue.forecast?.filter(elem => elem.day === day.key));
            const symbolClass: string = averageValues.symbol 
                ? `wi ${symbolsMatch[averageValues.symbol]}`
                : '';
            return {
                symbol: symbolClass,
                temperature: averageValues.temperature,
            }
        })
    }

    return (
        <ListContainer>
            {
                result.length ? result.map( (day, index) => (
                    <ListElement>
                        <ListText>{days[index].name}</ListText>
                        <ListText>{day.temperature}°</ListText>
                        <Icon className={day.symbol}></Icon>
                    </ListElement>
                )) : null
            }
      </ListContainer>
    );
};

export default DateListValues;
