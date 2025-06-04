import { useState } from "react";
import viteLogo from "/vite.svg";

const Header = () => {
  return <h1> "OSACCESS Half Stack application development"</h1>;
};

// Propos || Porque SI tenemos que pasar datos
const Content = (props) => {
  return (
    <div>
      <p>
        {" "}
        {props.part1}
        {props.exercises1}
      </p>

      <p>
        {" "}
        {props.part2}
        {props.exercises2}
      </p>

      <p>
        {" "}
        {props.part3}
        {props.exercises2}
      </p>
    </div>
  );
};

const Total = (props) => {
  return <p>Number of exercicies {props.total}</p>;
};

const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  return (
    <>
      <Header course={course} />

      <Content
        part1={part1}
        exercises1={exercises1}
        part2={part2}
        exercises2={exercises2}
        part3={part3}
        exercises3={exercises3}
      />

      <Total total={exercises1 + exercises2 + exercises3} />
    </>
  );
};

export default App;
