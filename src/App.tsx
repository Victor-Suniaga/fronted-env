import React from "react";
import './App.css';
import logo from "./logo.svg";

import { BackgroundCold, BackgroundWarm } from './components/styled/body';
import { HeaderSection, Title } from './components/styled/header';
import {
  Icon,
  ListContainer,
  ListElement,
  ListText,
} from './components/styled/list';


import SearchBar from './components/search';
import TemperatureKPI from './components/temperatureKPI';

const App = () => {

  const Background = true ? BackgroundCold : BackgroundWarm;
  return (
    <Background>
      <HeaderSection>
        <img src={logo} className="App-logo" alt="logo" />
        <Title>whatwheather?</Title>
      </HeaderSection>
      <SearchBar />
      <TemperatureKPI />
      <ListContainer>
        <ListElement>
          <ListText>Monday</ListText>
          <ListText>32</ListText>
          <Icon className="wi wi-night-sleet"></Icon>
        </ListElement>
      </ListContainer>
    </Background>
    
  );
}

export default App;
