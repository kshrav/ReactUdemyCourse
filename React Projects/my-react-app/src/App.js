import "./App.css";
import CoreConceptImpl from "./components/CoreConceptImpl.js";
import Header from "./components/Header/Header";
import Examples from "./components/Examples.js";
import AllFiles from "./coding_Exercises/AllFiles.js";

function App() {
  return (
    <div className="App">
      <Header/>
      <main>
      <CoreConceptImpl/>
      <Examples/>
      <div>
        {/* <AllFiles /> */}
      </div>
      </main>
    </div>
  );
}

export default App;


// instead of code 42 to 71 code we can also write the following
 /*<SectionWrapper title="Core Concepts">
          <main>
              <ul>
                <FileTwo
                  cls="App-logo1"
                  title="React"
                  description="This is first react component app"
                  img={logo}
                />
                <FileTwo
                  Static way of assigning value to the attributes
                  cls="App-logo1"
                  title="React"
                  description="This is second react component"
                  img={logo} Dynamic value of img
                />
                Accesing with array index
                <FileTwo
                  cls="App-logo1"
                  title={CORE_CONCEPTS[0].title}
                  description={CORE_CONCEPTS[0].description}
                  img={logo}
                />
                Using Spread operator
                <FileTwo cls="App-logo1" {...CORE_CONCEPTS[1]} />
                Component Using Destructuring Outputting List Data Dynamically
                <CoreConceptImpl />
              </ul>
          </main>
        </SectionWrapper> */