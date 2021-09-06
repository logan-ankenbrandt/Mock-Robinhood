# **Gatsby-Robinhood SimDAQ API**
This is my guide for how I built the SimDAQ API for the Gatsby Hiring Challenge - for the installation guide, follow this [link](https://github.com/logan-ankenbrandt/Gatsby-Robinhood/).



## **Table of Contents**

- [Goal](#goal)
- [Implementation](#implementation)
- [Challenges](#challenges)

## **Goal <a name = "goal"></a>**
The goal was to build an API that mocked the functionality of a large stock exchange - SimDAQ. 

To build this, I used:

* `axios` for HTTP Requests

## **Implementation <a name = "implementation"></a>**

This is the guide to how I implemented this API.

* [api/index.js](https://github.com/logan-ankenbrandt/Gatsby-Robinhood/blob/main/api/index.js)
    * I looped over the `JSON` object acquired from the database
    * I then set the minimum and the maximum using the `Math.ceil()` and `Math.floor()` functions
    * I updated the price between the min and max variables using the `Math.random()` function
    * I used `axios` to submit a `patch()` request to update the database.


## **Challenges <a name = "challenges"></a>**
* *Foundational*
    * Typically, when I write scripts like this to make changes to data, I usually use Python3 as my language of choice, and I still will generally default to the language due to its wide range of built-in functions and ease of use; however, manipulating data with JavaScript was a good experience that I would do again, for I feel much more comfortable managing `JSON` objects and making HTTP requests qith `axios`.
* *Bottlenecks*
    * Database Updates
        * When I first implemented the updatePrices() function in the server, I found that requests would get stacked up, and as a result, the application wasn't updating at the speed it needed to. 
        * My resolution to this was to simply maintain one price value for each ticker and update it with the `Math.random()` funciton.
* *Moving Forward*
    * To reiterate, I enjoyed learning about JavaScript's built-in functions for manipulating data, and I feel much more comfortable using the `axios` library for making HTTP requests!