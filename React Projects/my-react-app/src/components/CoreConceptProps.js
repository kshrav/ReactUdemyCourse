import React from 'react'

function CoreConceptProps({image, title, description}) {
  return (
    <>
      <li>
        <img src={image} alt={title} />
        <h1>{title}</h1>
        <p>{description}</p>
      </li>
    </>
  )
}

export default CoreConceptProps
