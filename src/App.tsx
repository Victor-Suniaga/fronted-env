import React from "react";
import './App.css';
import logo from "./logo.svg";

import SearchBar from './components/search'

function App() {
  return (
    <div>
      <header>
        <SearchBar></SearchBar>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
