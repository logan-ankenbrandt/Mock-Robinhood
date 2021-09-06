# **Gatsby-Robinhood Frontend**
This is my guide for how I built the Frontend for the Gatsby Hiring Challenge - for the installation guide, follow this [link](https://github.com/logan-ankenbrandt/Gatsby-Robinhood/).



## **Table of Contents**

- [Goal](#goal)
- [Implementation](#implementation)
- [Challenges](#challenges)

## **Goal <a name = "goal"></a>**
The goal was to build an Frontend that could fill HTTP requests every second to provide the user with updated prices. 

To build this, I used:

* `react` as the framework for this web application
* `axios` as my JavaScript library for making HTTP requests

## **Implementation <a name = "implementation"></a>**

This is the guide to how I implemented this API.

### ***[Components](https://github.com/logan-ankenbrandt/Gatsby-Robinhood/tree/main/frontend/src/components/stock)*** 

* [src/components/stock/Stock.js](https://github.com/logan-ankenbrandt/Gatsby-Robinhood/blob/main/frontend/src/components/stock/Stock.js)
    * The component where I house the component that is rendered on the AllStocks, the main page, component - 
    I used a functional components to pass props through to the necessary tags.
* [src/components/stock/StockList.js](https://github.com/logan-ankenbrandt/Gatsby-Robinhood/blob/main/frontend/src/components/stock/StockList.js)
    * The component where I:
        * Rendered the `<Stock/>` component to the web page
        * Made HTTP requests using `axios` and used a recursive `setTimeout()`, rather than `setInterval()`, to reflect the updates in the database.

### ***[Pages](https://github.com/logan-ankenbrandt/Gatsby-Robinhood/tree/main/frontend/src/pages)***

* [src/pages/AllStocks.js](https://github.com/logan-ankenbrandt/Gatsby-Robinhood/blob/main/frontend/src/pages/AllStocks.js)
    * This is the page housing the `<StockList/>` - it is the main page for the web app where the user can see all of the stocks.
* [src/pages/SingleStock.js](https://github.com/logan-ankenbrandt/Gatsby-Robinhood/blob/main/frontend/src/pages/SingleStock.js)
    * This is the page where the user can individually view each stock and it's historical prices.

### ***[Root](https://github.com/logan-ankenbrandt/Gatsby-Robinhood/tree/main/frontend/src)***

* [src/App.js](https://github.com/logan-ankenbrandt/Gatsby-Robinhood/tree/main/frontend/src/App.js)
    * This is the file where I hold the routes to the different pages in the web application:
        * `/` routes to the `AllStocks` page
        * `/:symbol` routes to the `SingleStock` page
        * All other routes navigate to the 404 page
* [src/Reducer.js](https://github.com/logan-ankenbrandt/Gatsby-Robinhood/tree/main/frontend/src/Reducer.js)
    * This is the file used to manage the application's data.
* [src/Root.js](https://github.com/logan-ankenbrandt/Gatsby-Robinhood/tree/main/frontend/src/Root.js)
    * This is the file that stores the data from the user's session history

## **Challenges <a name = "challenges"></a>**
* *Bottlenecks*
    * Database Updates
        * When I first implemented updates in the frontend, I found that the `setInterval()` function was ignorant to pending requests, and I needed a function that accomadated slower request fullfillment. 
        * My resolution to this was on the frontend was to use a recursive version of the `setTimeout()` function to provide the system with more awareness of pending requests.
    * Historical Prices
        * This was a difficult challenge - here are a few of the steps in my process for solving this:
            * Initially, I tried to store every iteration of the price in the backend. However, requests quickly piled up as the data got much bigger, so I decided to delete values from the prices array every other iteration.
            * Next, I tried to create a new database model & route for storing all of the prices from every iteration in an array - just like my first try. I did this because I thought that since I wouldn't be using this data on the frontend, it wouldn't slow down the application - I was wrong!
            * Finally, I decided that my best bet was to learn `localStorage()`. It required me to:
                * Change my database model to `Number` instead of `Number` nested in an array.
                * Change the [/api/index.js](https://github.com/logan-ankenbrandt/Gatsby-Robinhood/blob/main/api/index.js) file to use the `Math.ceil()`, `Math.floor()`, and `Math.random()` to update the price instead of updating the price using an array, for I needed a number, not an array, so that `localStorage()` could store something unique instead of copying the backend.
                * In the `<StockList/>` component, I stored each ticker in `localStorage()`.
                * On the `SingleStock.js` page, I wrote functionality to:
                    * Identify the ticker's that was on the page 
                    * Loop through the ticker's array
                    * Push the index of the price, the price's value, and the key for the `x-axis` to the array in `localStorage()`
                * From there, I included the `<Chart/>` component from the `react-google-charts` library to display the historical prices.
* *Moving Forward*
    * To reiterate, I enjoyed learning about JavaScript's built-in functions for manipulating data, and I feel much more comfortable using the `axios` library for making HTTP requests!