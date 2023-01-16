import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//components
import {Header} from './components/appHeader';

function App() {
  return (
    <div className="App">
      <header>
        <Header/>
      </header>
    </div>
  );
}

export default App;
