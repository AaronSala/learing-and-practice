import React, { useState } from "react";

const ArrayUpdate = () => {
  const [fruits, setFruits] = useState([
    "mangoes",
    "oranges",
    "bananas",
    "apples",
  ]);

  function handleAddFruit() {
    const newFruit = document.getElementById("fruitInput").value;
    document.getElementById("fruitInput").value = "";
    setFruits((f) => [...fruits, newFruit]);
  }
  function handleRemoveFruit(index) {
    setFruits(fruits.filter((_, i) => i !== index));
  }

  return (
    <div>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index} onClick={() => handleRemoveFruit(index)}>
            {fruit}{" "}
          </li>
        ))}
      </ul>
      <input type="text" id="fruitInput" placeholder="Enter Fruit Name" />
      <button onClick={handleAddFruit}>Add food</button>
    </div>
  );
};

export default ArrayUpdate;
