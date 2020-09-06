
import { Forecast } from '../data/reducer/search.reducer'

export interface AverageValues {
    symbol: string,
    temperature: number,
};
export const getAverageTemp = (forecastList: Forecast[] = []): AverageValues => {
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