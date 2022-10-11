import logo from "./logo.svg";
import "./App.css";
import { Display } from "./components/Display/Display";
import { Button } from "./components/Button/Button";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Display />
        <Button />
      </header>
    </div>
  );
}

export default App;
