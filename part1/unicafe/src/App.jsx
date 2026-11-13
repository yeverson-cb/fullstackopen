import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const increaseGood = () => {
    setGood(good + 1)
  }
  const increaseNeutral = () => {
    setNeutral(neutral + 1)
  }
  const increaseBad = () => {
    setBad(bad + 1)
  }

  return (
      <div>
        <h1>give feedback</h1>
      <button onClick={increaseGood}>good</button>
        <button onClick={increaseNeutral}>neutral</button>
        <button onClick={increaseBad}>bad</button>

        <h1>statistics</h1>
        <li>good {good}</li>
        <li>neutral {neutral}</li>
        <li>bad {bad}</li>
        <li>all {good + neutral + bad}</li>
        <li>average {((good * 1) + (neutral * 0) + (bad * -1)) / (good + bad + neutral)}</li>
        <li>positive {(good) / (neutral + good + bad) * 100 } %</li>


      </div>
  )
}

export default App
