// src/App.jsx
import { useState } from "react"
import fighterData from "./assets/fighterData.jsx"
import Fighter from "./components/Fighter/Fighter.jsx"

const App = () => {
  const [team, setTeam] = useState([])
  const [money, setMoney] = useState(100)
  const [zombieFighters, setZombieFighters] = useState([...fighterData])
  const [totalStrength, setTotalStrength] = useState(0)
  const [totalAgility, setTotalAgility] = useState(0)
  
  const updateStr = (newTeam) => {
    setTotalStrength(newTeam.reduce((total, fighter) => {
      return total + fighter.strength
    }, 0))
  }

  const updateAgl = (newTeam) => {
    setTotalAgility(newTeam.reduce((total, fighter) => {
      return total + fighter.agility
    }, 0))
  }

  const handleAddFighter = (fighter) => {
    // If the player has enough money, adds character
    // to party and updates money, else log error
    if (money >= fighter.price) {
      setMoney(oldMoney => oldMoney - fighter.price)
      const newTeam = [...team, fighter]
      setTeam(newTeam)
      updateStr(newTeam)
      updateAgl(newTeam)
    } else {
      console.log('Not enough money')
    }
  }

  const handleRemoveFighter = (fighterIndex) => {
    let newTeam = [...team]
    newTeam.splice(fighterIndex, 1)
    setMoney(oldMoney => oldMoney + team[fighterIndex].price)
    setTeam(newTeam)
    updateStr(newTeam)
    updateAgl(newTeam)
  }
  
  return <>
    <h1>Hello Reactville!</h1>
    <div>
      <h2>Player</h2>
      <ul>
        <li>Money: {money}</li>
        <li>Total Strength: {totalStrength}</li>
        <li>Total Agility: {totalAgility}</li>
      </ul>
      <h2>Team</h2>
      <ul>
        {team.length === 0 ? (
          <li><em>Pick some team members!</em></li>
        ) : (
          team.map( (fighter, index) => (
            <li key={index}>
              <Fighter {...fighter} />
              <button onClick={() => handleRemoveFighter(index)}>Remove</button>
            </li>
          ))
        )}
      </ul>
    </div>
    <div>
      <h2>Fighters:</h2>
      <ul>
        {zombieFighters.map( (fighter, index) => (
          <li key={index}>
            <Fighter {...fighter} />
            <button onClick={() => handleAddFighter({...fighter})}>Add to My Team</button>
          </li>
        ))}
      </ul>
    </div>
  </>
}

export default App
