import React from "react";

const List = () => {
  const fruits = [
    { id: 1, name: "mangoes", calories: 34 },
    { id: 2, name: "bananas", calories: 120 },
    { id: 3, name: "oranges", calories: 159 },
    { id: 4, name: "apples", calories: 60 },
    { id: 5, name: "coconuts", calories: 120 },
  ];
  fruits.sort((a, b) => a.name.localeCompare(b.name));

  const listitem = fruits.map((fruit) => {
    return (
      <li key={fruit.id}>
        {fruit.name} &nbsp; <b>{fruit.calories}</b>
      </li>
    );
  });

  return (
    <div>
      <ol>{listitem}</ol>
    </div>
  );
};

export default List;
