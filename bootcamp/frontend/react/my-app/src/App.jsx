import "./App.css";
import Gallery from "./Gallery";
import ScientistList from "./ScientistList";
import Counter from "./Counter";
import { Link } from "react-router";

function App() {
  return (
    <>
      <ul>
        <li className="flex  gap-2">
          <Link to="/thinking-in-react">Thinking in React</Link>

          <Link to="/portal">Portal</Link>
          <Link to="/photo-browser">Photo Browser App</Link>
        </li>
      </ul>
      <Counter />
      <ScientistList />
    </>
  );
}

export default App;
