import React, { useState } from 'react';
import './style.css'

function App() {
  const [currSide, setCurrSide] = useState(0);
  const [max, setMax] = useState(6);
  const [hasSetMax, setHasSetMax] = useState(false);
  const sides = [
    'https://etc.usf.edu/clipart/39100/39195/die_02_01_03_39195_mth.gif',
    'https://etc.usf.edu/clipart/42100/42158/die_01_42158_mth.gif',
    'https://etc.usf.edu/clipart/42100/42159/die_02_42159_mth.gif',
    'https://etc.usf.edu/clipart/42100/42160/die_03_42160_mth.gif',
    'https://etc.usf.edu/clipart/42100/42161/die_04_42161_mth.gif',
    'https://etc.usf.edu/clipart/42100/42162/die_05_42162_mth.gif',
    'https://etc.usf.edu/clipart/42100/42164/die_06_42164_mth.gif',
    'https://thumbs.gfycat.com/PastelComplicatedAfricanfisheagle-small.gif',
  ];

  if (!hasSetMax) {
    return (
      <div class="parent">
        <h1>Roll a Die!</h1>
        <form>
          <label>
            How many sides should the die have? <br />
            <i>(Choose a number between 1 and 6.)</i> <br />
            <input type="text" name="max" value={max} onChange={e => setMax(e.target.value)}/>
          </label>
          <input type="submit" value="Start!" onClick={() => {
            if (max >= 1 && max <= 6) setHasSetMax(true);
          }} />
        </form>
      </div>
    )
  }

  return (
    <div class="parent">
      <h1>Roll a Die!</h1>
      <img src={sides[currSide]} alt="Die side corresponding to current side number" height={100} />
      {_displayCaption(currSide)}
      <div id="buttons">
        <button onClick={() => {
          const side = _rollDie(max);
          setCurrSide(7);
          setTimeout(() => setCurrSide(side), 1000);
        }}>Roll</button>
        <button onClick={() => setHasSetMax(false)}>Go back</button>
      </div>
    </div>
  );
}

function _rollDie(max) {
  return Math.floor(Math.random() * max) + 1;
}

function _displayCaption(currSide) {
  switch (currSide) {
    case 0:
      return (<p>Roll to begin.</p>)
    case 7:
      return (<p>Rolling...</p>)
    default:
      return (<p>The die landed on {currSide}.</p>)
  }
}

export default App;
