import logo from "./logo.svg";
import "./App.css";

export function Header() {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1> React Essentials </h1>
      <p>
        The Library for web and native User Interface
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  );
}


function App() {
  return <div className="App">
    <Header />
  </div>;
}

export default App;
