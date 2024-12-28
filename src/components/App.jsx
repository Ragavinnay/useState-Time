import React, { useState } from "react";

function App() {
  setInterval(currentTime, 1000);
  let now = new Date().toLocaleTimeString();
  const [time, setTime] = useState(now);

  function currentTime() {
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  }

  return (
    <div className="container">
      <h1>{time}</h1>
      <p>Time Zone(+5.30 GMT)</p>
    </div>
  );
}

export default App;
