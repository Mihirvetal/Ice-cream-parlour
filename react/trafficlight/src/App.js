import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("green");

  useEffect(() => {
    let timeoutId;

    const trafficLightSequence = () => {
      setColor("green");
      timeoutId = setTimeout(() => {
        setColor("yellow");
        timeoutId = setTimeout(() => {
          setColor("red");
          timeoutId = setTimeout(() => {
            setColor("yellow");
            timeoutId = setTimeout(() => {
              setColor("green");
            }, 2000);
          }, 5000);
        }, 2000);
      }, 3000);
    };

    trafficLightSequence();

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div
      style={{
        width: "100px",
        height: "100px",
        backgroundColor: color,
        borderRadius: "50%",
        margin: "50px auto",
        transition: "background-color 0.5s ease",
      }}
    ></div>
  );
}

export default App;
