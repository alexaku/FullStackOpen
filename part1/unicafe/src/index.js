import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Average = ({ good, bad, all }) => {
  if (all > 0) {
    return <p>average {(good * 1 + bad * (-1))/all}</p>
  } else {
    return <p>average 0</p>
  }
}

const PositiveFeedback = ({ good, all }) => {
  if (all > 0) {
    return <p>positive {good*100/all} %</p>
  } else {
    return <p>positive 0 %</p>
  }
}


const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const all = good + neutral + bad

  return (
    <div>
      <h1>give feedback</h1>

      <Button handleClick={() => setGood(good + 1)} text='good'/>
      <Button handleClick={() => setNeutral(neutral + 1)} text='neutral'/>
      <Button handleClick={() => setBad(bad + 1)} text='bad'/>

      <h1>statistics</h1>
      
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {all}</p>
      <Average good={good} neutral={neutral} bad={bad} all={all}/>
      <PositiveFeedback good={good} all={all}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));

