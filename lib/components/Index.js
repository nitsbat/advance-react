import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  const [number, setNumber] = useState({ num: 33 });

  const AsyncCall = () => {
    return Promise.resolve(43);
  };

  async function ResultCall() {
    setNumber({num : await AsyncCall()});
  }

  useEffect(() => {
    ResultCall();
  });

  return (
    <h2> Hello {number.num} </h2>
  );
};

export default App;

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
