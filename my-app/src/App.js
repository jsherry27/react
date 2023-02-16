import logo from "./logo.svg";
import "./App.css";
import Myname from "./Myname";
import Comedy from "./Comedy";

// function App() {
const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Myname></Myname>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learning how to suck my ball sack
        </a>
        <Comedy></Comedy>
      </header>
    </div>
  );
};

export default App;
