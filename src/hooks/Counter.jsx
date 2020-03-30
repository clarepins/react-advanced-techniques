import React, { useState, Fragment } from "react";

function Counter(props) {
  const [count, setState] = useState(0);
  const [name, setName] = useState("");

  return (
    <Fragment>
      <input type="text" onChange={text => setName(text.target.value)}></input>
      <div>
        {name} clicked {count} times!
      </div>
      <button onClick={() => setState(count + 1)}>Increase</button>
    </Fragment>
  );
}

export default Counter;
