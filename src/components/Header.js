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
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Online Status: {onlineStatus ? ":)" : ":("}</li>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li><Link to="/grocery">Grocery</Link></li>
                    <li>Cart</li>
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