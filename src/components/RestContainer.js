import RestCard from "./RestCard";
import { useState } from "react";

import restdata from "../utils/restdata.json";

const RestContainer = () => {
    // State Superpowerful Variable by React - useState
    const [listOfRestaurants, setListOfRestaurants] = useState(
        restdata.restaurants
    );

    // const restList = restdata.restaurants;
    // console.log(restList);

    return (
        <>
            <div className="filter">
                <button
                    onClick={() => {
                        const filteredList = listOfRestaurants.filter(
                            (res) => res.info.avgRating > 4
                        );
                        setListOfRestaurants(filteredList);
                    }}
                >
                    Top Rated Restaurants
                </button>
            </div>
            <div className="rest-container">
                {listOfRestaurants.map((data) => (
                    <RestCard details={data} key={data.info.id} />
                ))}
            </div>
        </>
    );
};

export default RestContainer;
