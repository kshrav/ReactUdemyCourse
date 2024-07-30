import React from 'react'
import './FileOne.css'

const user = {firastName : "Shravya", lastName : "K"};

export default function FileOne() { // we can mention export before the function itself
  return (
    <div className = "container">
      <h1 className = "cls-h1"> 
        {/* In react  we use className attribute instead of class which we use in js*/}
        Hello {user.firastName} {user.lastName} Welcome to React
      </h1>
    </div>
  )
}

// export default FileOne
