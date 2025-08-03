import "./App.css";
import Gallery from "./Gallery";
import ScientistList from "./ScientistList";
import Counter from "./Counter";
import { Link } from "react-router";

function App() {
  return (
    <>
      <ul>
        <li>
          <Link to="/thinking-in-react">Thinking in React</Link>
        </li>
      </ul>
      <Counter />
      <ScientistList />
    </>
  );
}

export default App;
