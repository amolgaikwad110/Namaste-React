import React from "react";
import ReactDOM from "react-dom/client";
import restdata from "./restdata.json";

/**
 * Foodex - Food Ordering App
 * Header
 * - Logo
 * - NavItems
 * Body
 * - Search
 * - RestaurantContainer
 *   - RestaurantCard
 * Footer
 * - Copyright
 * - Address
 * - Links
 * - Contact
 */

// JSX ==>> Babel converts it to React.createElement ==>> React Element ==>> Javascript Object ⇒> When we render this to the DOM it becomes HTML Element.
const heading = (
    <div>
        <h1 className="head">Hello React using JSX</h1>
        <p>Test</p>
    </div>
);

console.log(heading);

// React Component
// Everything in React is component - header, footer, button, searchbar
// There are 2 types of components in React
// Class based component - old way of writing component
// Functional component - new way of writing component - It is function which returns some piece of JSX code.

const Title = () => <h1>Hello React</h1>;

const HeadingComponent = () => (
    <div>
        <Title />
        <h1>Hello React functional component</h1>
    </div>
);

const Header = () => {
    return (
        <div className="header">
            <a className="logo">Foodex</a>
            <ul className="nav-items">
                <li>
                    <a href="">Home</a>
                </li>
                <li>
                    <a href="">About</a>
                </li>
                <li>
                    <a href="">Contact</a>
                </li>
                <li>
                    <a href="">Cart</a>
                </li>
            </ul>
        </div>
    );
};

const SearchBar = () => {
    return <div className="search-bar">
        <input type="text" placeholder="Search for Restaurant and Food" />
    </div>;
};

const RestCard = (props) => {
    console.log("Props", props);

    // const { details } = props;

    const { name, cuisines, avgRating, cloudinaryImageId, sla, costForTwo, veg } =
        props.details.info;

    // const { restName, cuisine } = props;
    const imageSrc = `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`;

    return (
        <div className="rest-card">
            <div className="rest-card-img">
                <img src={imageSrc} alt="" />
            </div>
            <div className="rest-card-details">
                <h3>{name}</h3>
                <h4>{cuisines.join(", ")}</h4>
                <h4>{costForTwo}</h4>
                <h4>{avgRating}</h4>
                <h4>{sla.slaString}</h4>
            </div>
        </div>
    );
};

const RestContainer = () => {
    const restList = restdata.restaurants;
    console.log(restList);

    return (
        <div className="rest-container">
            {
                restList.map((data) => (
                    <RestCard details={data} key={data.info.id} />
                ))
            }
        </div>
    );
};

const Body = () => {
    return (
        <div className="body">
            <SearchBar />
            <RestContainer />
        </div>
    );
};

const AppLayout = () => {
    return (
        <div className="app-layout">
            <Header />
            <Body />
        </div>
    );
};
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
