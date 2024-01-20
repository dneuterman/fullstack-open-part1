import { useState } from 'react'

const Header = ({ name }) => <h1>{name}</h1>

const Button = ({ handleClick, text}) => <button onClick={handleClick}>{text}</button>

const Statistics = ({ value, name }) => {
  return (
    <p>{name}: {value}</p>
  )
}

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const total = good + bad + neutral;
  const average = (good + (bad * -1))/total;
  const positive = (good/total) * 100;

  const isNoFeedback = () => {
    if ((good === 0) && (neutral === 0) && (bad === 0)) {
      return <p>No feedback given</p>
    }
    return (
      <>
      <Statistics value={good} name="good" />
      <Statistics value={neutral} name="neutral" />
      <Statistics value={bad} name="bad" />
      <Statistics value={total} name="all" />
      <Statistics value={average} name="average" />
      <Statistics value={`${positive}%`} name="percent positive" />
      </>
    )
  }

  return (
    <div>
      <Header name="Give Feedback" />
      <Button handleClick={() => setGood(good + 1)} text="good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="bad" />
      <Header name="Statistics" />
      {isNoFeedback()}
    </div>
  )
}

export default App
