#React

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
- - Search
- - Restaurant Container
-      - RestaurantCard
-      - Img
-      - Name of Res, Start Rating, Cuisine, delivery time
- Footer
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
