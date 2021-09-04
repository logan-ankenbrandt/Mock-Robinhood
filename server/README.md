# **Gatsby-Robinhood Server**
This is my Node.js backend for the Gatsby Hiring Challenge.



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

* server/index.js
    * This is the central file where I:
        * Initialized the MongoDB instance and connect it with my Express server
        * Initialzed my app by requiring the Express package
        * Referenced the routes that will be used to pass request through my server
        * Initialized cors so third-parties, such as the `frontend/` and the `api`, can make requests
        * Defined the retrieveStocks() function that will update the prices every second.
* server/routes.js
    * This is the file where I defined CRUD actions using the `axios` package such as:
        * `.post()` to upload new data to the database
        * `.get()` to retrieve & display data from the database
        * `.patch()` to update data in the database
        * `.delete()` to remove data from the database

### ***Data***

#### **Modeling**
* [server/models/Stock.js]()
    * This is the file where I defined the data fields that were necessary to store such as the stock's symbol and price.

#### **Uploading & Deleting**
* server/data/seed.sh
* server/data/delete.sh


## **Challenges <a name = "challenges"></a>**

Add notes about how to use the system.
