import React, { useState } from 'react'

const ArrayUpdate = () => {
    const [fruits, setFruits] = useState(['mangoes', 'oranges', 'bananas', 'apples'])
    
    function handleAddFruit() {
        
    }
    function handleRemoveFruit() {}

  return (
    <div>
      <ul>
        <li>{fruits}</li>
      </ul>
    </div>
  );
}

export default ArrayUpdate
