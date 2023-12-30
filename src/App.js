// App.js
import React from "react";
import ReactDOM from 'react-dom/client';
import Header from "./components/Header";
import Body from "./components/Body";

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    )
}

// Use createRoot to render the app
const rootInstance = ReactDOM.createRoot(document.getElementById('root'));

rootInstance.render(<AppLayout />);




