import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import FileOne from "./components/FileOne.js";
import FileTwo from "./components/FileTwo.js";
import CoreConceptProps from "./components/CoreConceptProps.js";
import Header from "./components/Header.js";
import { data } from "./components/data.js";
import TabButton from "./components/TabButton.js";
import { EXAMPLE } from "./components/data.js";

function App() {
  // let tabContent = "Please click on any button";
  const [buttonContent, setButtonContent] = useState();
  function handleOnSelect(selectedTopic) {
    setButtonContent(selectedTopic);
    console.log(buttonContent);
    // console.log(selectedTopic);
  }
  // On condition rendering
  let tabContent = <p>Please select any button</p>;
  
  if (buttonContent) {
    tabContent = (
      <div>
        <h1>{EXAMPLE[buttonContent].title}</h1>
        <p>{EXAMPLE[buttonContent].description}</p>
        <pre>
          <code>{EXAMPLE[buttonContent].code}</code>
        </pre>
      </div>
    );
  }

  return (
    <div className="App">
      <Header />
      <div>
        <section>
          <main>
            <h2>Core Concepts</h2>
            <FileOne className="App-header" />
            <section id="core-concepts">
              <ul>
                <FileTwo
                  className="App-logo1"
                  title="React"
                  description="This is first react component app"
                  img={logo}
                />
                <FileTwo
                  // Static way of assigning value to the attributes
                  className="App-logo1"
                  title="React"
                  description="This is second react component"
                  img={logo} //Dynamic value of img
                />
                {/* Accesing with array index */}
                <FileTwo
                  className="App-logo1"
                  title={data[0].title}
                  description={data[0].description}
                  img={data[0].image}
                />
                {/* Using Spread operator */}
                <FileTwo className="App-logo1" {...data[1]} />

                {/* Component Using Destructuring */}
                <CoreConceptProps className="App-logo1" {...data[2]} />
              </ul>
            </section>
          </main>
        </section>
      </div>
      <div>
        <section>
          <main>
            <ul>
              <TabButton
                className="button"
                onClick={() => handleOnSelect("Button")}
                label="Button1"
              ></TabButton>
              {/* <TabButton>Button</TabButton> */}
              {/* <TabButton onSelect = {handleOnSelect}> */}
              <TabButton onSelect={() => handleOnSelect("Components")}>
                Components
              </TabButton>
              {/* <TabButton onSelect = {handleOnSelect}> */}
              <TabButton onSelect={() => handleOnSelect("JSX")}>JSX</TabButton>
              <TabButton onSelect={() => handleOnSelect("Props")}>
                Props
              </TabButton>
              <TabButton
                onSelect={() => handleOnSelect("States")}
                label="States"
              />
            </ul>
          </main>
{/* 
          {!buttonContent ? (
            <p>Please select any button</p>
          ) : (
            <div>
              <h1>{EXAMPLE[buttonContent].title}</h1>
              <p>{EXAMPLE[buttonContent].description}</p>
              <pre>
                <code>{EXAMPLE[buttonContent].code}</code>
              </pre>
            </div>
          )} */}
          {tabContent}
        </section>
      </div>
    </div>
  );
}

export default App;
