import logo from "../logo.svg"

const reactDescription = ["Fundamental", "Crucial", "Core"];

export function getRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

export default function Header() {
  const description = reactDescription[getRandomInt(2)];
  return (
    <header className="App-header">
      <img src = {logo} className="App-logo" alt="logo" />
      <h1> React Essentials </h1>
      <p>
        React is the {description} Library for web and native User Interface
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