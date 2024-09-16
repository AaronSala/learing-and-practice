

import './App.css'
import ArrayUpdate from './components/ArrayUpdate';
import Buttons from './components/Buttons';
import Changing from './components/Changing';
import ColorChanger from './components/ColorChanger';
import Counter from './components/Counter';
import List from './components/List'
import ObjectUpdate from './components/ObjectUpdate';

function App() {
 
  const fruits = [
                 { id: 1, name: "mangoes", calories: 34 },
                 { id: 2, name: "bananas", calories: 120 },
                 { id: 3, name: "oranges", calories: 159 },
                 { id: 4, name: "apples", calories: 60 },
                 { id: 5, name: "coconuts", calories: 120 },
  ];
  //fruits.sort((a, b) => a.name.localeCompare(b.name));
  const vegitables = [
                   { id: 6, name: 'spinanch', calories: 60 },
                   { id: 7, name: "cabbages", calories: 90 },
                   { id: 8, name: 'tomatoes', calories: 40 },
                   { id: 9, name: 'carrots', calories: 27 },
                  { id: 10, name: 'kales' , calories:56}
 ]

  return (
    <>
     {/*{fruits.length > 0 && <List items={fruits} category="Fruits" />}
     {vegitables.length > 0 && (<List items={vegitables} category="Vegitables" />)}
  */}
      {/*<Counter />*/}
      {/* <Changing />*/}
      {/* < ColorChanger />*/}
      {/* <ObjectUpdate />*/}
      <ArrayUpdate />
    </>
  );
}

export default App
