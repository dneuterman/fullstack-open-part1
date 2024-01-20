const Header = (props) => {
  return (
    <>
    <h1>{props.course}</h1>
    </>
  )
}

const Part = (props) => {
  return (
    <>
    <p>{props.part} {props.exercises}</p>
    </>
  )
}

const Content = ({part, exercises}) => {
  let content = [];
  for (let i = 0; i < part.length; i++) {
    content.push({
      part: part[i],
      exercises: exercises[i]
    })
  }
  return (
    <>
    {content.map((item, index) => <Part key={index} part={item.part} exercises={item.exercises} />)}
    </>
  )
}

const Total = (props) => {
  let sum = 0;
  for (const total of props.total) {
    sum += total;
  }
  return (
    <>
    <p>Number of exercises {sum}</p>
    </>
  )
}

const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  return (
    <div>
      <Header cours={course}/>
      <Content part={[part1, part2, part3]} exercises={[exercises1, exercises2, exercises3]} />
      <Total total={[exercises1, exercises2, exercises3]} />
    </div>
  )

}

export default App
