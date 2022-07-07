import {useState} from "react";
import logo from './logo.svg';
import './App.css';
import {useCounter} from "./context/ counter";
import {useTheme} from "./context/theme";
import {THEME_OPTIONS} from "./utils/constants/theme";

function App() {
  const { handleDecrement, handleIncrement} = useCounter()
  const { theme } = useTheme()
  return (
    <div className="App">
      <header className="App-header" style={{ background: theme===THEME_OPTIONS.LIGHT? 'white':'black'}}>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div style={{display:'flex'}}>
          <button onClick={handleIncrement}>
            increment
          </button>
          <button onClick={handleDecrement}>
            decrement
          </button>
        </div>

      </header>
    </div>
  );
}

export default App;
