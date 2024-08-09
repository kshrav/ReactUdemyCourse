import React from 'react'
import '../App.css'


function SectionWrapper({title, children, ...props}) {
 
  return (
    <>
      <section {...props}>
        <h1 
        style={
            {textAlign : "center"}
        }>{title}</h1>
        <p style={
            {textAlign : "center"}
        }>{children}</p>
      </section>
    </>
  )
}

export default SectionWrapper
