import './App.css';

import Calculator from './Calculator'
import DocsContainer from './docs/DocsContainer'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>HH Booster Calculator</h1>
        <div>This tool is currently broken due to a recent patch to the game. For now, please use <a href="https://raw.githubusercontent.com/45026831/hh-booster-detector/main/hh-booster-detector.js">the booster detector userscript</a> instead.</div>
        <span>Enter your opponent's <span class="code">playerLeaguesData</span> to calculate their boosters.</span>
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
