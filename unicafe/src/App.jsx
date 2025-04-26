import { useState } from 'react'

const StaticLine = ({text, value}) => {
  return (
    <>
      <td>
        <span>{text}</span>
      </td>
      <tr>
        <span>{value}</span>
      </tr>
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
          <table>
            <tr>
              <StaticLine text="good" value={good} />
            </tr>
            <tr>
              <StaticLine text="neutral" value={neutral} />
            </tr>
            <tr>
              <StaticLine text="bad" value={bad} />
            </tr>
            <tr>
              <StaticLine text="all" value={good + neutral + bad} />
            </tr>
            <tr>
              <StaticLine text="average" value={(good - bad) / (good + neutral + bad)} />
            </tr>
            <tr>
               <StaticLine text="positive" value={good / (good + neutral + bad) * 100 + "%"}/>
            </tr>
          </table>
        </>
      }
    </div>  
  )
}

export default App