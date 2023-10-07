import React from 'react';
import ReactDOM from 'react-dom/client';

/**
 *  <div id="parent">
        <div id="child1">
            <h1>Child 1</h1>
        </div>
        <div id="child2">
            <h1>Child 2</h1>
        </div>
    </div>
 */

const parent = React.createElement(
    'div',
    {
        id: 'parent'
    },
    [
        React.createElement(
            'div',
            { id: 'child1' },
            React.createElement(
                'h1',
                { id: '' },
                'Child 1'
            )
        ),
        React.createElement(
            'div',
            { id: 'child2' },
            React.createElement(
                'h1',
                { id: '' },
                'Child 2'
            )
        )
    ]
);

const heading = React.createElement("h1", { id: "heading" }, "Hello React !!!");

// React.createElement ==>> React Element ==>> Javascript Object
console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render basically get the Javascript Object and convert it into the heading tag and put in on DOM
// root.render replaces everything inside root with whatever we are passing
root.render(heading);