import React from 'react'
import './TabButton.css'
function TabButton({label, children, isSelected, ...props}) {

  // function handleOnClick(){
  //   console.log("Button clicked");
  // } // Inner function

  return (
    <ul>
        {/* <button onClick = {handleOnClick}>We can use inner functions without parantheses */}
        <button className = {isSelected ? 'button' : ''}
        {...props}>
            {label} 
            {children}
            {/* we are accessing instead of using props.label, props.children*/}
        </button>
      </ul>
  )
}

export default TabButton
