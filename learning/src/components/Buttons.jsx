import React from 'react'

const Buttons = () => {

  let count =0
    
    const handleClick = (name) => {
      if (count < 3) {
        count++
        console.log(`${name} you clicked me${count} times`)
      } else {
        console.log(`${name} stop clicking me`);
        
      }
        
    }

  return (
    <div>
      <button onClick={()=>handleClick("Aaron")}>Click me </button>
    </div>
  )
}

export default Buttons
