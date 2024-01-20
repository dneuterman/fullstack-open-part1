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
  const part1 = {
    name: "Fundamentals of React",
    exercises: 10
  };
  const part2 = {
    name: "Using props to pass data",
    exercises: 7
  };
  const part3 = {
    name: "State of a component",
    exercises: 14
  };

  return (
    <div>
      <Header cours={course}/>
      <Content part={[part1.name, part2.name, part3.name]} exercises={[part1.exercises, part2.exercises, part3.exercises]} />
      <Total total={[part1.exercises, part2.exercises, part3.exercises]} />
    </div>
  )

}

export default App
