import React from "react";

function Tabs({ buttons, children, ButtonContainer = 'menu'}) {
    // const ButtonContainer = buttonContainer
    //setting component types dynamically it must start with an upper character
    // We can directly use it by passing the ButtonContainer instead of Assigning it 
    // We can pass a default value, so we do not mention and add it while providing prop value
  return <>
    <ButtonContainer>{buttons}</ButtonContainer>
    {children}
  </>
}

export default Tabs;
