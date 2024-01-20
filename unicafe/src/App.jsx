import { useState } from 'react'

const Header = ({ name }) => <h1>{name}</h1>

const Button = ({ handleClick, text}) => <button onClick={handleClick}>{text}</button>

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const total = good + bad + neutral;

  return (
    <div>
      <Header name="Give Feedback" />
      <Button handleClick={() => setGood(good + 1)} text="good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="bad" />
      <Header name="Statistics" />
      <p>good: {good}</p>
      <p>neutral: {neutral}</p>
      <p>bad: {bad}</p>
      <p>all: {total}</p>
      <p>average: {(good + (bad * -1))/total}</p>
      <p>positive: {(good/total) * 100}%</p>
    </div>
  )
}

export default App
