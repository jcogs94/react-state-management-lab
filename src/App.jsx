// src/App.jsx
import { useState } from "react"

const App = () => {
  const [team, setTeam] = useState([])
  const [money, setMoney] = useState(100)
  const [zombieFighters, setZombieFighters] = useState([
    {
      name: 'Survivor',
      price: 12,
      strength: 6,
      agility: 4,
      img: 'https://via.placeholder.com/150/92c952',
    },
    {
      name: 'Scavenger',
      price: 10,
      strength: 5,
      agility: 5,
      img: 'https://via.placeholder.com/150/771796',
    },
    {
      name: 'Shadow',
      price: 18,
      strength: 7,
      agility: 8,
      img: 'https://via.placeholder.com/150/24f355',
    },
    {
      name: 'Tracker',
      price: 14,
      strength: 7,
      agility: 6,
      img: 'https://via.placeholder.com/150/d32776',
    },
    {
      name: 'Sharpshooter',
      price: 20,
      strength: 6,
      agility: 8,
      img: 'https://via.placeholder.com/150/1ee8a4',
    },
    {
      name: 'Medic',
      price: 15,
      strength: 5,
      agility: 7,
      img: 'https://via.placeholder.com/150/66b7d2',
    },
    {
      name: 'Engineer',
      price: 16,
      strength: 6,
      agility: 5,
      img: 'https://via.placeholder.com/150/56acb2',
    },
    {
      name: 'Brawler',
      price: 11,
      strength: 8,
      agility: 3,
      img: 'https://via.placeholder.com/150/8985dc',
    },
    {
      name: 'Infiltrator',
      price: 17,
      strength: 5,
      agility: 9,
      img: 'https://via.placeholder.com/150/392537',
    },
    {
      name: 'Leader',
      price: 22,
      strength: 7,
      agility: 6,
      img: 'https://via.placeholder.com/150/602b9e',
    }
  ])

  let fighterKeys = Object.keys(zombieFighters[0])
  fighterKeys.splice(0, 1)
  fighterKeys.splice(-1, 1)

  const handleAddFighter = (fighterName) => {
    console.log('Fighter to add:', fighterName)
    
    let fighterToAdd
    
    zombieFighters.forEach( (fighter) => {
      if (fighter.name === fighterName) {
        fighterToAdd = {...fighter}
      }
    })

    if (money >= fighterToAdd.price) {
      setMoney(money - fighterToAdd.price)
      setTeam([...team, fighterToAdd])
    } else {
      console.log('Not enough money')
    }
  }
  
  return <>
    <h1>Hello world!</h1>
    <h2>Money: {money}</h2>
    <div>
      <h2>Fighters:</h2>
      <ul>
        {zombieFighters.map( (fighter, index) => (
          <li key={index}>
            <h3>{fighter.name}</h3>
            <img src={fighter.img} alt={fighter.name} />
            <ul>
              {fighterKeys.map( (property, index) => (
                <li key={index}>{property}: {fighter[property]}</li>
              ))}
            </ul>
            <button onClick={() => handleAddFighter(fighter.name)}>Add to My Team</button>
          </li>
        ))}
      </ul>
    </div>
  </>
}

export default App
