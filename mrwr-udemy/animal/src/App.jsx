import { useState } from 'react'
import AnimalShow from './AnimalShow';
import './App.css'

function getRandomAnimal() {
  const animals = ['cow', 'bird', 'gator', 'cat', 'dog', 'horse'];
  return animals[Math.floor(Math.random() * animals.length)];
}

function App() {

  const [animals, setAnimals] = useState([]);

  const addAnimal = () => {
    console.log(animals);
    setAnimals([...animals, getRandomAnimal()])
  }

  return (
    <div className="app">
      <button onClick={addAnimal}> Add Animal </button>

      <div className='cards'>
        {animals.map((animal, index) =>
          <AnimalShow type={animal} key={index} />
        )}
      </div>
    </div>
  )
}

export default App
