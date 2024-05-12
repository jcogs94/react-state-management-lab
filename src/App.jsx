// src/App.jsx
import { useState } from "react"
import fighterData from "./assets/fighterData.jsx"
import Fighter from "./components/Fighter/Fighter.jsx"

const App = () => {
  const [team, setTeam] = useState([])
  const [money, setMoney] = useState(100)
  const [zombieFighters, setZombieFighters] = useState(fighterData)

  const handleAddFighter = (fighterName) => {
    let fighterToAdd
    
    // Finds the correc fighter from the dataset
    zombieFighters.forEach( (fighter) => {
      if (fighter.name === fighterName) {
        fighterToAdd = {...fighter}
      }
    })

    // If the player has enough money, adds character
    // to party and updates money, else log error
    if (money >= fighterToAdd.price) {
      setMoney(money - fighterToAdd.price)
      setTeam([...team, fighterToAdd])
    } else {
      console.log('Not enough money')
    }
  }
  
  return <>
    <h1>Hello world!</h1>
    <div>
      <h2>Player</h2>
      <ul>
        <li>Money: {money}</li>
        <li>
          <h3>Team</h3>
          <ul>
          {team.length === 0 ? (
            <li><em>Pick some team members!</em></li>
          ) : (
            team.map( (fighter, index) => (
              <Fighter
                key={index}
                {...fighter}
              />
            ))
          )}
          </ul>
        </li>
      </ul>

    </div>
    <div>
      <h2>Fighters:</h2>
      <ul>
        {zombieFighters.map( (fighter, index) => (
          <li key={index}>
            <Fighter
              key={index}
              {...fighter}
            />
            <button onClick={() => handleAddFighter(fighter.name)}>Add to My Team</button>
          </li>
        ))}
      </ul>
    </div>
  </>
}

export default App
