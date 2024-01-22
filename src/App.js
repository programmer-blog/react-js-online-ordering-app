// App.js
import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from 'react-dom/client';
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/Usercontext";
//import Grocery from "./components/Grocery";

//Chunking
//Code Spliting
//Dynamic Bundling
// Lazy Loading
// On demand loading
const Grocery = lazy(() => import('./components/Grocery'))
const AppLayout = () => {

    const [userName, setUserName] = useState();
    //authentication logic
    useEffect(() => {
        const data = {
            name: "Programmer Blog"
        };
        setUserName(data.name);
    }, []);

    return (
        <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
            <div className="app">
                <Header />
                <Outlet />
                {/* outlet will be filled by the cildren according to the route */}
            </div>
        </UserContext.Provider>
    )
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/grocery",
                element: <Suspense fallback={<h1>Loading...</h1>}><Grocery /></Suspense>,
            },
            {
                path: "/restaurants/:resId",
                element: <RestaurantMenu />
            },
        ],
        errorElement: <Error />
    },
]);


// Use createRoot to render the app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);




