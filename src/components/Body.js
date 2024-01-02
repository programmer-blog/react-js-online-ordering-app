import RestaurantCard from "./RestaurantCard"
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
    //Local State Variable - uper Powrful variable - Hooks - useState
    // A react hook is a normal JavaScript function
    const [listOfRestaurants, setListOfRestaurants] = useState([]);

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.6244806999999999&page_type=DESKTOP_WEB_LISTING&is-seo-homepage-enabled=true");
        const json = await data.json();

        setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    //conditional rendering
    return listOfRestaurants.length == 0 
        ? <Shimmer /> : (
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