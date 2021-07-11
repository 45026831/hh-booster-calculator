import './App.css';

import Calculator from './Calculator';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>HH Booster Calculator</h1>
        <span>Enter your opponent's stats to calculate their boosters.</span>
      </header>
      <section className="App-body">
        <Calculator />
      </section>
    </div>
  );
}

export default App;
