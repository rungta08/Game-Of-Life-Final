import React from 'react';
import './App.css';
import World from "./universe/World/World";
import Filter from "./universe/Filter/Filter";

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Filter/>
          <World size = {2}/>
      </header>
    </div>
  );
}

export default App;
