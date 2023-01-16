import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  const [number,setNumber] = useState({name : 'nitin'});
  return (
    <h2> Hello {number.name} </h2>
  );
};

export default App;

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
