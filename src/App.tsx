import React from "react";
import './App.css';
import logo from "./logo.svg";

import { BackgroundCold, BackgroundWarm, BodyContainer } from './components/styled/body';
import { HeaderSection, Title } from './components/styled/header';
import { useSelector } from 'react-redux';

import SearchBar from './components/search';
import TemperatureKPI from './components/temperatureKPI';
import DateListValues from './components/datelist';

import { Climate } from './data/reducer/search.reducer';
import { RootStore } from './data/reducers';
import { getAverageTemp, AverageValues } from './assets/utils';

const App = () => {

  const searchValue: Climate = useSelector((state:RootStore) => {
    return state.search;
  });

  const averageValues: AverageValues = getAverageTemp(searchValue.forecast);

  const Background = averageValues.temperature < 15 ? BackgroundCold : BackgroundWarm;
  return (
    <>
      <Background />
      <BodyContainer>
        <HeaderSection>
          <img src={logo} className="App-logo" alt="logo" />
          <Title>whatwheather?</Title>
        </HeaderSection>
        <SearchBar />
        <TemperatureKPI />
        <DateListValues />
      </BodyContainer>
    </>
  );
}

export default App;
