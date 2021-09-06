# **Gatsby-Robinhood Server**
This is my guide for how I built the Node.js backend for the Gatsby Hiring Challenge - for the installation guide, follow this [link](https://github.com/logan-ankenbrandt/Gatsby-Robinhood/).



## **Table of Contents**

- [Goal](#goal)
- [Implementation](#implementation)
- [Challenges](#challenges)

## **Goal <a name = "goal"></a>**
The goal was to build a Node.js server that could process HTTP requests from the Frontend and the SimDAQ API, and to do this, I used:

* Express as my Node.js backend framework for processing HTTP requests

* MongoDB for my database

* Mongoose as my modeling library for MongoDB

## **Implementation <a name = "implementation"></a>**

This is the guide to the various components of the backend.

### ***Server Archeticture***

* [server/index.js](https://github.com/logan-ankenbrandt/Gatsby-Robinhood/blob/main/server/index.js)
    * This is the central file where I:
        * Initialized the MongoDB instance and connected it with my Express server
        * Initialzed my server by requiring the Express package
        * Referenced the routes that will be used to pass request through my server
        * Initialized cors so third-parties, such as the `frontend/` and the `api`, can make requests
        * Defined the retrieveStocks() function that will update the prices every second.
* [server/routes/routes.js](https://github.com/logan-ankenbrandt/Gatsby-Robinhood/blob/main/server/routes/routes.js)
    * This is the file where I defined CRUD actions using the `axios` package such as:
        * `.post()` to upload new data to the database
        * `.get()` to retrieve & display data from the database
        * `.patch()` to update data in the database
        * `.delete()` to remove data from the database

### ***Data***

#### **Modeling**
* [server/models/Stock.js](https://github.com/logan-ankenbrandt/Gatsby-Robinhood/blob/main/server/models/Stock.js)
    * This is the file where I defined the data fields that were necessary to store such as the stock's symbol and price.

#### **Uploading & Deleting**
* [server/data/seed.sh](https://github.com/logan-ankenbrandt/Gatsby-Robinhood/blob/main/server/data/seed.sh)
    * This is the file where I listed the `curl` commands necessary for uploading the data into the database by running `npm run seed`
* [server/data/delete.sh](https://github.com/logan-ankenbrandt/Gatsby-Robinhood/blob/main/server/data/delete.sh)
    * This is the shell script I wrote to delete all of the data in the database by running `npm run delete`


## **Challenges <a name = "challenges"></a>**
* *Foundational*
    * Express, MongoDB, Mongoose
        * I had never used these frameworks before, so it required me to find resources on getting a server such as this running quickly.
    * Routes & Requests
        * In the past, I've mainly used Django and DjangoRestFramework, and I found the Node.js framework to be extremely lightweight and effective for allowing the user to easily perform CRUD actions by making requests to the server.
* *Bottlenecks*
    * Database Updates
        * When I first implemented the updatePrices() function in the server, I found that requests would get stacked up, and as a result, the application wasn't updating at the speed it needed to. 
        * My resolution to this was to delete parts of the prices array after every other iteration to ensure that the application didn't crash.
* *Moving Forward*
    * I really enjoyed using Express, Mongoose, and MongoDB, and I plan on using them as my backend & db of choice going forward because of the speed of which I could get an application up and running!