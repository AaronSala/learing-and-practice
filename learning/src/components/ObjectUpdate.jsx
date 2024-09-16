import React, { useState } from 'react'

const ObjectUpdate = () => {
const [car,setCar] = useState({year:2024, make:"mercedez benz",model:"E350"})

    const { year, make, model } = car;

    function handleYearChange (event) {
    setCar(c=>({...c, year:event.target.value}))
    } 
    function handleMakeChange (event) { 
      setCar((c) => ({ ...c, make: event.target.value }));
    }; 
    function handleModelChange (event) {
        setCar((c) => ({ ...c, model: event.target.value })); 
     }; 
    
  return (
    <div>
      <p>
        `your focourate car is {year}, {model}, {make}`
      </p>

      <input type="number" value={year} onChange={handleYearChange} /><br/>
      <input type="text" value={make} onChange={handleMakeChange}/><br/>
      <input type="text" value={model} onChange={handleModelChange} />
    </div>
  );
}

export default ObjectUpdate
