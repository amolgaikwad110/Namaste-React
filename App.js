import React from "react";
import ReactDOM from "react-dom/client";

import { REST_DATA } from "./data";

/**
 * Header
 * - Logo
 * - Nav Items
 * Body
 * - Search Bar
 * - Rest Container
 * - Rest Card
 * -- Image
 * -- Name, Star Rating, Cusine, Price, delivery time
 * Footer
 * - Copyright
 * - Links
 * - Address
 * - Contact
 */

const Logo = () => {
  return (
    <a href="" className="logo">
      <img src="https://upload.wikimedia.org/wikipedia/en/1/12/Swiggy_logo.svg" />
    </a>
  );
};

const NavItems = () => {
  return (
    <nav className="nav-items">
      <ul>
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
    </nav>
  );
};

const Header = () => {
  return (
    <div className="header">
      <Logo />
      <NavItems />
    </div>
  );
};

const SearchBar = () => {
  return <div className="search-bar">SearchBar</div>;
};

const RestCard = (props) => {
  const { restData } = props;

  const {
    name,
    cuisines,
    avgRating,
    deliveryTime,
    costForTwo,
    cloudinaryImageId,
    id,
  } = restData.data;

  return (
    <div className="rest-card">
      <div>
        <img
          src={
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
            cloudinaryImageId
          }
        />
        <h4>{name}</h4>
        <p>{cuisines.join(",")}</p>
        <div>{avgRating} star rating</div>
        <div>{costForTwo / 100} star rating</div>
        <div>{deliveryTime} minutes</div>
      </div>
    </div>
  );
};

const RestContainer = () => {
  return (
    <div className="rest-container">
      {REST_DATA.map((restData) => (
        <RestCard restData={restData} key={restData.data.id} />
      ))}
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

const App = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
