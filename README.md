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
