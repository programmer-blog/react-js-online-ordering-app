import RestaurantCard, { withPromotedLabel } from "./RestaurantCard"
import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { withPromotedLabel } from "./RestaurantCard";
import UserContext from "../utils/Usercontext";
const Body = () => {
    //Local State Variable - uper Powrful variable - Hooks - useState
    // A react hook is a normal JavaScript function
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurant, setfilteredRestaurant] = useState([]);
    const [searchText, setSearchText] = useState("");
    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

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
    const { setUserName, loggedInUser } = useContext(UserContext);
    //conditional rendering
    return listOfRestaurants.length == 0
        ? <Shimmer /> : (
            <div className="body">
                <div className="flex">
                    <div className="search m-4 p-4">
                        <input type="text" className="border border-solid border-black" value={searchText} onChange={(e) => {
                            setSearchText(e.target.value)
                        }} />
                        <button className="px-4 py-2 bg-green-100 m-4 rounded-lg"
                            onClick={() => {
                                //Filter Restaurants cards and update th UI
                                //Search Text

                                const filteredRestaurants = listOfRestaurants.filter(
                                    (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                                setfilteredRestaurant(filteredRestaurants);

                            }}>Search</button>


                    </div>
                    <div className="search m-4 p-4
                    items-center flex">
                        <button
                            className="px-4 py-2 bg-gray-100 rounded-lg"
                            onClick={() => {
                                const filteredRestaurants = listOfRestaurants.filter(
                                    (res) => res.info.avgRating > 4
                                );
                                setfilteredRestaurant(filteredRestaurants);
                            }}
                        >Top Rated Restaurants</button>
                    </div>
                    <div className="search m-4 p-4
                    items-center flex">
                        <label className="mx-2">Username: </label>
                        <input type="text" className=" p-2 border border-solid border-black" value={loggedInUser} onChange={(e) => {
                            setUserName(e.target.value)
                        }} />
                    </div>
                </div>
                <div className="flex flex-wrap">
                    {
                        filteredRestaurant.map(
                            (restaurant) => (
                                <Link
                                    key={restaurant.info.id}
                                    to={"/restaurants/" + restaurant.info.id}>
                                    {/* `{
                                        restaurant.data.promoted ? <RestaurantCardPromoted key={restaurant.info.id}
                                            resData={restaurant} />
                                            : <RestaurantCard key={restaurant.info.id}
                                                resData={restaurant} />
                                    }` */}
                                    <RestaurantCard key={restaurant.info.id}
                                        resData={restaurant} />
                                </Link>
                            )
                        )
                    }
                </div>
            </div>
        )
}

export default Body;