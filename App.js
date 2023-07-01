import React from "react";
import ReactDOM from "react-dom/client";

/**
 * <div id="parent">
 *      <div id="child1">
 *          <h1>I am h1 tag</h1>
 *          <h2>I am h2 tag</h2>
 *      </div>
 *      <div id="child2">
 *          <h1>I am h1 tag</h1>
 *          <h2>I am h2 tag</h2>
 *      </div>
 * </div>
 *
 * ReactElement(Object) ==>> HTML (Browser Understands)
 *
 */

const parent = React.createElement(
  "div",
  {
    id: "parent",
  },
  [
    React.createElement(
      "div",
      {
        id: "child1",
      },
      [
        React.createElement(
          "h1",
          {
            id: "heading11",
          },
          "I am h1 tag"
        ),
        React.createElement(
          "h2",
          {
            id: "heading12",
          },
          "I am h2 tag"
        ),
      ]
    ),
    React.createElement(
      "div",
      {
        id: "child2",
      },
      [
        React.createElement(
          "h1",
          {
            id: "heading21",
          },
          "I am h1 tag"
        ),
        React.createElement(
          "h2",
          {
            id: "heading22",
          },
          "I am h2 tag"
        ),
      ]
    ),
  ]
);
console.log(parent);

// Creating Element using React
const heading = React.createElement(
  "h1",
  {
    id: "heading",
    className: "heading",
  },
  "Hello World in React"
);
console.log(heading);

// Creating root in React using ReactDOM
// Everything will load / render inside root
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
