import { useState } from "react";

export default function ScientistItem({ scientist }) {
  let [visitCount, setVisitCount] = useState(0);
  const [backgroundColor, setBackgroundColor] = useState("white");
  function sayHello() {
    alert("hello  " + scientist.name);
    setVisitCount(visitCount + 1);
  }
  function changeBackgroundColor() {
    setBackgroundColor("#ff0000");
  }
  function resetBackgroundColor() {
    setBackgroundColor("white");
  }
  return (
    <div
      onClick={sayHello}
      onMouseEnter={changeBackgroundColor}
      onMouseLeave={resetBackgroundColor}
      style={{
        display: "flex",
        alignItems: "center",
        backgroundColor: backgroundColor,
        marginBottom: "20px",
        gap: "100px",
        border: "1px solid #ccc",
        borderRadius: "10px",
      }}
    >
      <img
        style={{
          width: "200px",
          height: "200px",

          borderRadius: "50%",
        }}
        src={`https://i.imgur.com/${scientist.imageId}.jpg`}
        alt={scientist.name}
      />
      <div style={{ textAlign: "left", color: "black" }}>
        <h2>{scientist.name}</h2>
        <p>
          <strong>Profession: {scientist.profession}</strong>
        </p>
        <p>Accomplishment: {scientist.accomplishment}</p>
        <p>Visit Count: {visitCount}</p>
      </div>
    </div>
  );
}
