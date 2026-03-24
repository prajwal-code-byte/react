import React from 'react'

const Mouseover = () => {
    function MouseFn(){
        alert("Mouse over")
    }


  return (
    <div>
      <p onMouseOver={MouseFn}>This is a Paragraph</p>
    </div>
  )
}

export default Mouseover
