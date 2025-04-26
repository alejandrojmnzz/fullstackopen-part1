import { useState } from 'react'

const Statics = ({good, neutral, bad}) => {
  if (good + neutral + bad !== 0) {
    return (
      <>
        <h1>statistics</h1>
        <p>good {good}</p>
        <p>neutral {neutral}</p>
        <p>bad {bad}</p>
        <p>all {good + neutral + bad}</p>
      </>
    )
  }

}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  function handleGood() {
    setGood(good + 1)
  }
  function handleNeutral() {
    setNeutral(neutral + 1)
  }
  function handleBad() {
    setBad(bad + 1)
  }
  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={handleGood}>good</button>
      <button onClick={handleNeutral}>neutral</button>
      <button onClick={handleBad}>bad</button>
      
      <Statics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App