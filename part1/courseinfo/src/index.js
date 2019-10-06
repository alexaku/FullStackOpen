import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => {
  return(
    <h1>{props.course}</h1>
  )
}

const Part = (props) => {
  return(
    <p>{props.partAndExercise.part} {props.partAndExercise.exercise}</p>
  )
}

const Content = (props) => {
  const partsAndExercises = props.partsAndExercises
  
  return(
    <div>
      <Part partAndExercise={partsAndExercises[0]}/>
      <Part partAndExercise={partsAndExercises[1]}/>
      <Part partAndExercise={partsAndExercises[2]}/>
    </div>
  );
}

const Total = (props) => {
  return(
    <p>Number of Exercises {props.exercises}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  const partsAndExercises = [
    {part: part1, exercise: exercises1},
    {part: part2, exercise: exercises2},
    {part: part3, exercise: exercises3},
  ]

  return (
    <div>
      <Header course={course}/>
      <Content partsAndExercises={partsAndExercises}/>
      <Total exercises={exercises1 + exercises2 + exercises3}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
