// App.js
import React from "react";
import ReactDOM from 'react-dom/client';

/**
 * Project UI Structure
 * Header
 *  - Logo
 *  - Nav Items
 * Body
 *  - Search
 *  - Restaurant Container
 *      - RestaurantCard
 * Footer
 *  - Copyright
 *  - Links
 *  - Address
 *  - Contact
 */


/* const parent2 = React.createElement("div", { id: "parent" }, [
     React.createElement("div", { id: "child" }, [
         React.createElement("h1", {}, "I'm an h1 tag"),
         React.createElement("h2", {}, "I'm an h2 tag"),
     ]),
     React.createElement("div", { id: "child2" }, [
         React.createElement("h1", {}, "I'm an h1 tag"),
         React.createElement("h2", {}, "I'm an h2 tag"),
     ]),
 ]); */
const Title = () => (
    <h1 className="head" tabIndex="5">Hello React using JSX
    </h1>
);

const HeadingComponent = () => (
    <div id="container">
        <Title />
        <h1>Hello React Functional component!</h1>
    </div>
);
// Use createRoot to render the app
const rootInstance = ReactDOM.createRoot(document.getElementById('root'));
//rootInstance.render(parent);
rootInstance.render(<HeadingComponent />);




