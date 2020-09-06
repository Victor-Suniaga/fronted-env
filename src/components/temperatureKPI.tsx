import React from 'react';
import {
    TempContainer,
    Temperature,
    TempIcon,
} from './styled/list';
import { useSelector } from 'react-redux';

import { Climate } from '../data/reducer/search.reducer';
import { RootStore } from '../data/reducers';
import { symbolsMatch } from '../assets/constants';
import { getAverageTemp, AverageValues } from '../assets/utils';


const TemperatureKPI = () => {

    const searchValue: Climate = useSelector((state:RootStore) => {
        return state.search;
    });

    const averageValues: AverageValues = getAverageTemp(searchValue.forecast);
    const symbolClass: string = averageValues.symbol 
        ? `wi ${symbolsMatch[averageValues.symbol]}`
        : '';

    return (
        <TempContainer>
            <TempIcon className={symbolClass}></TempIcon>
            <Temperature>{averageValues.temperature}°</Temperature>
        </TempContainer>
    );
};

export default TemperatureKPI;
