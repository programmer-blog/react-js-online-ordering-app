import RestaurantCard from "./RestaurantCard"
import { useState } from "react";
import restaurants from '../utils/mockData'

const Body = () => {
    //Local State Variable - uper Powrful variable - Hooks - useState
    // A react hook is a normal JavaScript function
    const [listOfRestaurants, setListOfRestaurants] = useState(restaurants);

    return (
        <div className="body">
            <div className="filter">
                <button
                    className="filter-btn"
                    onClick={() => {
                        const filteredRestaurants = listOfRestaurants.filter(
                            (res) => res.info.avgRating > 4
                        );
                        setListOfRestaurants(filteredRestaurants);
                    }}
                >Top Rated Restaurants</button>
            </div>
            <div className="res-container">
                {
                    listOfRestaurants.map(
                        (restaurant) => (
                            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
                        )
                    )
                }
            </div>
        </div>
    )
}

export default Body;