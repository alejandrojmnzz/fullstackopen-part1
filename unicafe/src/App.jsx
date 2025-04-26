import { useState } from 'react'

const StaticLine = ({text, value}) => {
  return (
    <>
      <p>{text} {value}</p> 
    </>
  )
}

const Button = ({text, onClick}) => {
  return (
    <button onClick={onClick}>{text}</button>
  )
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
      <Button text="good" onClick={handleGood} />
      <Button text="neutral" onClick={handleNeutral} />
      <Button text="bad" onClick={handleBad} />
      
      {
        good + neutral + bad != 0 &&
        <>
          <h1>statistics</h1>
          <StaticLine text="good" value={good} />
          <StaticLine text="neutral" value={neutral} />
          <StaticLine text="bad" value={bad} />
          <StaticLine text="all" value={good + neutral + bad} />
        </>
      }
    </div>  
  )
}

export default App