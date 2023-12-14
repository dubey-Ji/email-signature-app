import classes from './Container.module.css'
import { useState } from 'react';

function Container() {

  const [userName, setUserName] = useState('');
  function hanldeOnChange(e) {
    setUserName(e.target.value);
    console.log(userName);
  }
  return (
    <div className={classes.container}>
      <p className={classes.greeting}>Hello I'm Ashutosh</p>
      <div className={classes.inputgroup}>
        <input type='text' placeholder="what's your name...?" onChange={hanldeOnChange} />
      </div>
      <button>
        Next
      </button>
    </div>
  )
}

export default Container;
