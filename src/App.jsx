// src/App.jsx
import { useState } from "react"
import fighterData from "./assets/fighterData.jsx"
import Fighter from "./components/Fighter/Fighter.jsx"

const App = () => {
  const [team, setTeam] = useState([])
  const [money, setMoney] = useState(100)
  const [zombieFighters, setZombieFighters] = useState(fighterData)
  const [totalStrength, setTotalStrength] = useState(0)
  const [totalAgility, setTotalAgility] = useState(0)
  
  const updateStr = (newTeam) => {
    setTotalStrength(newTeam.reduce((total, fighter) => {
      return total + fighter.strength
    }, 0))
  }

  const updateAgl = (newTeam) => {
    setTotalAgility(newTeam.reduce((total, fighter) => {
      return total + fighter. agility
    }))
  }

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
      setMoney(mon => mon - fighterToAdd.price)
      const newTeam = [...team, fighterToAdd]
      setTeam(newTeam)
      updateStr(newTeam)
      updateAgl(newTeam)
    } else {
      console.log('Not enough money')
    }
  }

  const handleRemoveFighter = (fighterName) => {

  }
  
  return <>
    <h1>Hello world!</h1>
    <div>
      <h2>Player</h2>
      <ul>
        <li>Money: {money}</li>
        <li>Total Strength: {totalStrength}</li>
        <li>Total Agility: {totalAgility}</li>
        <li>
          <h3>Team</h3>
          <ul>
          {team.length === 0 ? (
            <li><em>Pick some team members!</em></li>
          ) : (
            team.map( (fighter, index) => (
              <li key={index}>
                <Fighter {...fighter} />
                <button key={index} onClick={() => handleRemoveFighter(fighter.name)}>Remove</button>
              </li>
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
            <Fighter {...fighter} />
            <button onClick={() => handleAddFighter(fighter.name)}>Add to My Team</button>
          </li>
        ))}
      </ul>
    </div>
  </>
}

export default App
