import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
    const [btnNameReact, setBtnNameReact] = useState("Login");
    const onlineStatus = useOnlineStatus();
    //UseEffect.
    // If no dependency array is provided UseEffect is called every time the component is rendered.
    //if dependency array is empty then useEffect is called o n initial rendered only once
    // if dependency array has data then  it wiill be called when yhe every time the dta is updated

    useEffect(() => { }, []);

    return (
        <div className="flex justify-between">
            <div className="logo-container">
                <img className="w-56" src={LOGO_URL} />
            </div>
            <div className="flex items-center">
                <ul className="flex p-8 m-2 shadow-lg bg-pink-100">
                    <li className="px-4">Online Status: {onlineStatus ? "✔" : "❌"}</li>
                    <li className="px-4"><Link to="/">Home</Link></li>
                    <li className="px-4"><Link to="/about">About Us</Link></li>
                    <li className="px-4"><Link to="/contact">Contact Us</Link></li>
                    <li className="px-4"><Link to="/grocery">Grocery</Link></li>
                    <li className="px-4">Cart</li>
                    <button className="login"
                        onClick={() => {
                            btnNameReact == "Login" ?
                                setBtnNameReact("Logout") :
                                setBtnNameReact("Login")
                        }}>
                        {btnNameReact}
                    </button>
                </ul>
            </div>
        </div>
    )
}

export default Header;