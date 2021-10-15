import logo from './logo.svg';
import './App.scss';
import config from './config';
import LifeCycles from './LifeCycles';

function App() {
  const {apiUrl} = config;

  return (
    <div className="App">
      <header className="App-header">
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
        <p>{apiUrl}</p>
        <LifeCycles />
      </header>
    </div>
  );
}

export default App;
