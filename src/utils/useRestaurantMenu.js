import { useEffect, useState } from "react";
import { MENU_API_URL } from "../utils/constants";

const useRestaurantMenu = (resId) => {
    
    const [restInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchData()
    }, []);

    const fetchData = async () => {
        const data = await
            fetch(MENU_API_URL + resId);
        const json = await data.json();
        setResInfo(json.data);
    }

    return restInfo;
}

export default useRestaurantMenu;