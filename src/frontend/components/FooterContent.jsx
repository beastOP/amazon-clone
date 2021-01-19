import React, { useState } from 'react'

const FooterContent = ({imageUrl, h6, p}) => {
  const [ isActive, setActive ] = useState(false)
  const addHover = () => setActive(!isActive)
  return (
    <a onTouchStart={addHover} 
       onMouseEnter={addHover} 
       onMouseLeave={addHover} 
       onTouchEnd={addHover} 
       href={imageUrl}
    >
      <h6 className={isActive ? 'underlineh4' : null}>{h6}</h6>
      <p className={isActive ? 'underlinep' : null}>{p}</p>
    </a>
  )
}

export default FooterContent
