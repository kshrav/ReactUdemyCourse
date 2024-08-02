import React from 'react'

function CoreConceptProps({img, title, description}) {
  return (
    <div>
      <li>
        <img src={img} alt={title} />
        <h1>{title}</h1>
        <p>{description}</p>
      </li>
    </div>
  )
}

export default CoreConceptProps
