import { people } from "./data";
import ScientistItem from "./ScientistItem";

export default function ScientistList() {
  return (
    <div>
      <h1>List of Scientists</h1>
      {people.map((scientist) => (
        <ScientistItem key={scientist.id} scientist={scientist} />
      ))}
    </div>
  );
}
