import React from 'react'
import './FileTwo.css'

function FileTwo(props) { //props is parameter every function should have only one property, it's name could be anything 
  return (
    <div className = "div-cls">
      <li>
        {/* We can access the attributes of the elements using dot operator inside the Curly brases {props.attribute_name} */}
        <img className={props.cls} src={props.img} alt={props.title} />
        <h1>{props.title}</h1>
        <p>{props.description}</p>
      </li>
    </div>
  )
}

export default FileTwo
