import React, { useState } from 'react'



const ColorChanger = () => {

    const [color, setColor] = useState("#ffffff");

    const handleChange = (event) => {
        setColor(event.target.value)
    }

  return (
    <div className="color-display-container">
      <h1>Color Picker</h1>
      <div className="color-display" style={{ backgroundColor: color }}>
        <p>Selected color {color}</p>
      </div>

      <div className="color-selector">
        <label>Select Color</label>
        <input
          type="color"
          
          value={color}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}

export default ColorChanger
