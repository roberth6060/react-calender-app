import React from 'react';
import moment from 'moment';

const months = moment.months();
const year = new Date().getFullYear();
const day = moment.now();

console.log(months);
console.log(day)



function App() {
  return (
    <div className="App">

    </div>
  );
}

export default App;
