# React JS

## Parcel

- Dev build
- Local Server
- HMR = Hot Module Replacement
- File Watching Algorithm – written in C++
- Caching – Faster Builds
- Image Optimization
- Minification
- Bundling
- Compressing
- Consistent Hashing
- Code Splitting
- Differential Bundling – Support older browsers
- Error Handling
- Https
- Tree Shaking – Remove Unused Code
- Different dev and prod bundles

## Food Ordering App

- Project UI Structure
- Header
- - Logo
- - Nav Items
- Body
- Search
- Restaurant Container
- RestaurantCard
- Img
- Name of Restaurant, Star Rating, Cuisines, Delivery Time
- - Footer
- - Copyright
- - Links
- - Address
- - Contact

Two types of Export/Import

- Default Export/Import

export default Component;
import Component from "path"

- Named Export/Import

export const Component;
import {Component} from "path"

# React Hooks

(Normal JS Utility function)

- useState() - Superpowerful State Variable in React
- useEffect()

In useState, two parameters are given. Initial stae and a method to change the state. It will sync with UI. React is doing DOM manipulation and it is fast in re rendering the UI.

`const [listOfRestaurants, setListOfRestaurants] = useState([])`

Whenever a state variable updates, React re-renders the Component.

React uses Reconciliation Algorithm in the backend. (React Fiber in React 16 - find diff and update the dom - incremental rendering)
Why React is Fast. Because it is doing effecient dom manipulation because it has a virtual dom.
It can find effeciently find diff between virtual dom.

Whenever there is a UI. React creates a Virtual DOM of UI.

Actual DOM has HTML tags like div and images etc.

Virtual DOM is a representation of Actual DOM. Virtual DOM are react elements or Objects.

### Diff Algorithm

Diff Algorithm finds out the difference between the DOM and previous Virtual DOM.

Whenever state variable updates react trigger a reconciliation cycle
It re renders the components.

Using state variable react will re renders the UI and updates the variables.
Normal local vars only update the values not UI.
React is fast because of react fiber algorthim (the new reconciliation algorithim) - it finds the difference between two virtual doms and updates the portion that is required to change.

React Fiber, along with the reconciliation algorithm, contributes to React's speed and efficiency by introducing a more sophisticated and adaptable approach to updating the UI. It enables React to handle complex component trees and deliver a fast and responsive user experience.

To fix CORS issue append this URL before the call. https://corsproxy.io/?

`const data = await fetch("https://corsproxy.io/?https://www.api-example.com/api......`

# 2 types of Routing in web apps

- Cleint side Routing - No network call.
- Server side Routing - Make a network call - page is loaded from server

##Class base components
`class UserClass extends React. Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='test-class'>
                ....
            </div>
        );
    }

}`

We use extends parameter from React.Component. Creare a constructor and receive props. In props call super(props).

In class body use reander method. add a return () mehtod.

### Using state in Class based componenets

    ` this.state = {
            count: 0,
        }`

    `{this.state.count}`

    #### Never update state vars directly

In class based componenets - first constructor is called then render method is called.
Life Cycle methods

- Parent Constructor
- Parent Render
  - Child Constructor
  - Child Render
  - Child ComponentDidMount
- Parent ComponentDidMount
  React 'life Cycle
- Render Phase
- Mounting - Constructor - Render
- Commit Phase
- ComponentDidMount

- Custom Hooks - Use use keyword

- Hww large react applications are optimized. it is called
- Chunking
- Code Spliting
- Dynamic Bundling
- Lazy Loading
- On demand loading

#### Instead of lading a component using impor {.. } from ..

## The lazy() method is used.

Instead of `import Grocery from "./components/Grocery";`
use: `const Grocery = lazy(() => import('/components/Grocery')) `

but page takes time to load so use <Suspense> with a fallback for react for intermediary stage.
`import React, { lazy, Suspense } from "react";`
In Router
`{
                path: "/grocery",
                element: <Suspense fallback={<h1>Loading...</h1>}><Grocery /></Suspense>,
            },`

###TailwindCSS
Installation
`>> npm install -D tailwindcss postcss autoprefixer
    >> npx tailwindcss init`

    #### Flex
    `className="flex"`
    Elements are displayed sisde by side

    #### Width
    `w-56`

    To add space between items

    `justify-between`

    Padding - margin

`p-4 m-4`

### Higher Order Components

### Lifting the state up

### Props Drilling

React has one way data stream. Dat is passed from parent to children - top to bottom

React Context : Avoid props drilling - A global data - Context is global

    `import { createContext } from "react";

    const userContext = createContext({
        loggedInUser: "Default User"
    });

    export default userContext;

        const { loggedInUser } = useContext(UserContext);

        {loggedInUser}
    `
    Onlly the data that is going to be used in multiple places that should be used in context.

### Redux - Redux ToolKit - RTK

Redux is used for state management.
React and Redux are separate libraries
Redux can be considered as a huge JS object with a lot of data.
Redux store is divided into small parts known as slices.
We create multiple slices in store. Cart slice - user slice
We cannot add data directly to slice.
When we click a button suppose Add button - it dispatches an action.
Dispatch action Calls a function.

#### Click Product Add button -> Dispatch and action -> Call a function -> function will modify the slice.

#### Dispatch an Action ==> Calls Reducer function => Modifies the slice of the Redux store => dispatch => reducer => update the cart

#### Getting data from store. We use a selector - Use a selector to give data to the component

#### This is phenomena is known as Subscribing to the store

We have a Store Slice -> Subscribe to store using selector

Click on add button dispatches an action calls the reducer function and updates the slice of store.
Components are subscribed to the store using a selector.

- Steps for Redux
  - Install the @reduxjs/toolkit and react-redux
  - Build our store
  - Connect store to app
  - Slice (cartSlice)
  - dispatch(action)
  - Selector
    `npm install @reduxjs/toolkit`
    `npm install react-redux`
 Example slice:

  `import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state, action) => {
            state.item.push(action.payload);
        },
        removeItem: (state) => {
            state.items.pop();
        },
        clearCart: (state) => {
            state.items.length = 0;
        }
    }
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;`