import React from 'react';
import {
    TempContainer,
    Temperature,
    TempIcon,
} from './styled/list';
import { useSelector } from 'react-redux';

import { Climate, Forecast } from '../data/reducer/search.reducer';
import { RootStore } from '../data/reducers';

const symbolsMatch: {[k: string]: string} = {
    'clear sky': 'wi-day-sunny',
    'few clouds': 'wi-cloud',
    'scattered clouds': 'wi-day-sunny-overcast',
    'broken clouds': 'wi-cloudy',
    'shower rain': 'wi-showers',
    'rain': 'wi-rain',
    'thunderstorm': 'wi-thunderstorm',
    'snow': 'wi-snow',
    'mist': 'wi-fog'
};

interface AverageValues {
    symbol: string,
    temperature: number,
};

const getAverageTemp = (forecastList: Forecast[] = []): AverageValues => {
    const arrayResult: {[k: string]: number} = {};
    let tempResult: number = 0;
    forecastList.forEach((elem: Forecast) => {
        if (!arrayResult[elem.symbol.name]) arrayResult[elem.symbol.name] = 0;
        arrayResult[elem.symbol.name] += 1;
        tempResult += elem.temperature.value;
    })
    const orderedClimate: string[] = Object.keys(arrayResult).sort( (a:string, b:string) => (
        arrayResult[a] > arrayResult[b] ? arrayResult[a] : arrayResult[b]
    ))
    return {
        symbol: orderedClimate[0],
        temperature: tempResult !== 0 ? Math.round(tempResult / forecastList.length) : 0,
    }
}

const TemperatureKPI = () => {

    const searchValue: Climate = useSelector((state:RootStore) => {
        return state.search;
    });

    const averageValues = getAverageTemp(searchValue.forecast);
    const symbolClass = averageValues.symbol 
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
