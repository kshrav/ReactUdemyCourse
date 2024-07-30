import React from 'react'
import './TabButton.css'
function TabButton({label, children, onSelect}) {

  function handleOnClick(){
    console.log("Button clicked");
  } // Inner function

  return (
    <div>
      <li>
        {/* <button onClick = {handleOnClick}>We can use inner functions without parantheses */}
        <button onClick ={onSelect}>
            {label} 
            {children}
            {/* {children} */}
            {/* we are accessing instead of using props.label, props.children*/}
        </button>
      </li>
    </div>
  )
}

export default TabButton
