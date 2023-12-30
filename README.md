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
