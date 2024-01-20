import { useState } from 'react'

const Header = ({ name }) => <h1>{name}</h1>

const Button = ({ handleClick, text}) => <button onClick={handleClick}>{text}</button>

const StatisticsLine = ({ value, name }) => {
  return (
    <p>{name}: {value}</p>
  )
}

const Statistics = ({ stats }) => {
  return (
    <>
    {stats.map((stat, index) => <StatisticsLine key={index} value={stat.value} name={stat.name} />)}
    </>
  )
}

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const total = good + bad + neutral;
  const average = (good + (bad * -1))/total;
  const positive = (good/total) * 100;

  const statObjects = [
    {
      name: "good",
      value: good
    },
    {
      name: "neutral",
      value: neutral
    },
    {
      name: "bad",
      value: bad
    },
    {
      name: "all",
      value: total
    },
    {
      name: "average",
      value: average
    },
    {
      name: "positive",
      value: `${positive}%`
    }
  ]

  const isNoFeedback = () => {
    if ((good === 0) && (neutral === 0) && (bad === 0)) {
      return <p>No feedback given</p>
    }
    return (
      <>
      <Statistics stats={statObjects} />
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
