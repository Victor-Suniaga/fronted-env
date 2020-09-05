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
  TempContainer,
  Temperature,
  TempIcon,
} from './components/styled/list';


import SearchBar from './components/search'

const App = () => {

  const Background = true ? BackgroundCold : BackgroundWarm;
  return (
    <Background>
      <HeaderSection>
        <img src={logo} className="App-logo" alt="logo" />
        <Title>whatwheather?</Title>
      </HeaderSection>
      <SearchBar></SearchBar>
      <TempContainer>
        <TempIcon className="wi wi-night-sleet"></TempIcon>
        <Temperature>30</Temperature>
      </TempContainer>
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
