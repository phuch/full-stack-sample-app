import './App.css';
import { useState } from "react";
import Button from '@mui/material/Button';

function App() {
  const [number, setNumber] = useState();
  const onClick = async () => {
    try {
      const res = await (
        await fetch(
          "/random"
        )
      );
      const result = await res.json();
      setNumber(result);
    } catch (e) {
      throw e;
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <Button variant="contained" onClick={onClick}>
          How much pate for Sam & Cotton tonight?
        </Button>
        <h1 style={{ color: 'black' }}>
          {number} gram
        </h1>
      </header>
    </div>
  );
}

export default App;
