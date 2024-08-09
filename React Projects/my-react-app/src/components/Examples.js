import React, { useState } from "react";
import SectionWrapper from "./SectionWrapper.js";
import TabButton from "./TabButton.js";
import Tabs from "./Tabs.js";
import { EXAMPLE } from "./data.js";

function Examples() {
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
    <>
      <SectionWrapper title="Tabs" id="core-concepts">
        <Tabs
        //   ButtonContainer = "menu" 
        //   for built in elements we mention them in "" for user Defined elements we use {} eg: buttonContainer = {SectionWrapper}
        buttons={
            <>
              <ul>
                {/* <TabButton>Button</TabButton> */}
                {/* <TabButton onSelect = {handleOnSelect}> */}

                <TabButton
                  isSelected={buttonContent === "Components"}
                  onClick={() => handleOnSelect("Components")}
                >
                  Components
                </TabButton>
                {/* <TabButton onSelect = {handleOnSelect}> */}
                <TabButton
                  isSelected={buttonContent === "JSX"}
                  onClick={() => handleOnSelect("JSX")}
                >
                  JSX
                </TabButton>
                <TabButton
                  isSelected={buttonContent === "Props"}
                  onClick={() => handleOnSelect("Props")}
                >
                  Props
                </TabButton>
                <TabButton
                  isSelected={buttonContent === "States"}
                  onClick={() => handleOnSelect("States")}
                  label="States"
                />
              </ul>
            </>
          }
        >
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
        </Tabs>
      </SectionWrapper>
    </>
  );
}

export default Examples;
