import UserContext from "../utils/Usercontext";
import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>About Us</h1>
                <div>LoggedIn User:
                    <UserContext.Consumer>
                        {({ loggedInUser }) => (
                            <h1 className="text-xl font-bold">{loggedInUser}</h1>
                        )}
                    </UserContext.Consumer>
                </div>
                <h2>This is about us page for Online Food Ordering app in React JS</h2>
                <UserClass name={"John Doe - (class based component)"}
                    location={"Test Location"} />
            </div>
        )
    }
}

export default About;
