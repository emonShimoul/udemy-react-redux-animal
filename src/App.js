import { useState } from 'react';
import AnimalShow from './AnimalShow';
import './App.css';

function getRandomAnimal() {
  const animals = ['bird', 'cat', 'cow', 'dog', 'gator', 'horse'];
  return animals[Math.floor(Math.random() * animals.length)];
}
// console.log(Math.random() * 6);
console.log(getRandomAnimal());

function App() {
  const [animals, setAnimals] = useState([]);

  const handleClick = () => {
    setAnimals([...animals, getRandomAnimal()]);
  }

  const renderedAnimals = animals.map((animal, index) => {
    return <AnimalShow type={animal} key={index}></AnimalShow>
  });

  return (
    <div className="App">
      <button onClick={handleClick}>Add Animal</button>
      <div>{renderedAnimals}</div>
      {/* <div>
        {animals.map((animal, index) => {
          return <AnimalShow type={animal} key={index}></AnimalShow>
        })}
      </div> */}
    </div>
  );
}

export default App;
