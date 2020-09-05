// index.js
module.exports = () => {
    const finalData = { weather: [] };
    const cities = ['Berlin', 'London', 'Toronto', 'Madrid', 'Seoul', 'Tokyo'];
    const symbols = ['clear sky', 'few clouds', 'scattered clouds', 'broken clouds', 'shower rain',
        'rain', 'thunderstorm', 'snow', 'mist'];

    cities.forEach(elem => {
        const data = {
            location: {
                "name": elem,
                "timezone": [],
                "location": {}
            },
            forecast: []
        }
        for (let i = 0; i < 5; i++) {
            for (let k = 0; k < 24; k++) {
                const symbolIndex = (Math.floor(Math.random() * symbols.length));
                const temp = (Math.floor(Math.random() * 35));
                const tempChange = (Math.floor(Math.random() * 4));
                const forecast = {
                    "day": i,
                    "symbol": {
                        "name": symbols[symbolIndex],
                    },
                    "temperature": {
                        "value": temp,
                        "min": temp - tempChange,
                        "max": temp + tempChange
                    },
                }
                data.forecast.push(forecast)
            }
        }
        finalData.weather.push(data);

    })
    return finalData
}
