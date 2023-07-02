import React from "react";
import ReactDOM from "react-dom/client";

const elem = <span>Hello React Element</span>;

const Title = function () {
  return <h1>{elem}</h1>;
};

const Heading = () => (
  <>
    <div id="container-1">
      <Title />
      <h1>Hello Functional Component</h1>
    </div>
    <div id="container-2">
      <h1>Container 2</h1>
    </div>
  </>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Heading />);
