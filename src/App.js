import './App.css';

import Calculator from './Calculator'
import DocsContainer from './docs/DocsContainer'

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
      <section className="App-docs">
        <DocsContainer />
      </section>
    </div>
  );
}

export default App;
