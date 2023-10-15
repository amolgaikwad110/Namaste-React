import React from 'react';
import ReactDOM from 'react-dom/client';

// JSX ==>> Babel converts it to React.createElement ==>> React Element ==>> Javascript Object ⇒> When we render this to the DOM it becomes HTML Element. 
const heading = (
    <div>
        <h1 className='head'>
            Hello React using JSX
        </h1>
        <p>Test</p>
    </div>
);

console.log(heading);


// React Component
// Everything in React is component - header, footer, button, searchbar
// There are 2 types of components in React 
// Class based component - old way of writing component  
// Functional component - new way of writing component - It is function which returns some piece of JSX code. 

const Title = () => <h1>Hello React</h1>

const HeadingComponent = () => (
    <div>
        <Title />
        <h1>Hello React functional component</h1>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<HeadingComponent />)

