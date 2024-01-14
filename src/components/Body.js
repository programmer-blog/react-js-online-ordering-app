import RestaurantCard from "./RestaurantCard"
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Body = () => {
    //Local State Variable - uper Powrful variable - Hooks - useState
    // A react hook is a normal JavaScript function
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurant, setfilteredRestaurant] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        const data = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.6244806999999999&page_type=DESKTOP_WEB_LISTING&is-seo-homepage-enabled=true");
        const json = await data.json();

        setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setfilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    const onlineStatus = useOnlineStatus();

    if (onlineStatus == false) return <h1>Looks like your are offline.
        Please check your internet connection.
    </h1>
    //conditional rendering
    return listOfRestaurants.length == 0
        ? <Shimmer /> : (
            <div className="body">
                <div className="filter">
                    <div className="search">
                        <input type="text" className="search-box" value={searchText} onChange={(e) => {
                            setSearchText(e.target.value)
                        }} />
                        <button onClick={() => {
                            //Filter Restaurants cards and update th UI
                            //Search Text

                            const filteredRestaurants = listOfRestaurants.filter(
                                (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                            setfilteredRestaurant(filteredRestaurants);

                        }}>Search</button>
                    </div>
                    <button
                        className="filter-btn"
                        onClick={() => {
                            const filteredRestaurants = listOfRestaurants.filter(
                                (res) => res.info.avgRating > 4
                            );
                            setfilteredRestaurant(filteredRestaurants);
                        }}
                    >Top Rated Restaurants</button>
                </div>
                <div className="res-container">
                    {
                        filteredRestaurant.map(
                            (restaurant) => (
                                <Link
                                    key={restaurant.info.id}
                                    to={"/restaurants/" + restaurant.info.id}><RestaurantCard key={restaurant.info.id} resData={restaurant} /></Link>
                            )
                        )
                    }
                </div>
            </div>
        )
}

export default Body;