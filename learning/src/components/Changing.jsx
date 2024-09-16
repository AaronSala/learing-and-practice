import React, { useState } from 'react'

const Changing = () => {

    const [name, setName] = useState('')
    const [age, setAge] = useState("");
    const [town, setTown] = useState("");

  return (
    <div>
      <label htmlFor="name">Name</label>
      <br />
      <input type="text" onChange={(event)=>setName(event.target.value)}></input>
      <br />
      <label htmlFor="age">Age</label>
      <br />
      <input type="number" onChange={(e)=>setAge(e.target.value)}/>
      <br />
      <label htmlFor="town">Town</label>
      <br />
      <input type="text" placeholder="town" onChange={(e)=>setTown(e.target.value)}></input>
      <div>
        <p>Name:{name}</p>
        <p>Age :{age}</p>
        <p>Town : {town}</p>
      </div>
    </div>
  );
}

export default Changing
