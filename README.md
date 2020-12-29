# Movie-App
Hey curious mind,
This is an app that I built to  to gain an understanding of how Node js and relevant frameworks such as React, Redux, MongoDb etc work.  Movie-App displays data for latest movies which are fetched from movie-db api | [Visit Website](http://movie-app-sudhansu.herokuapp.com/)

![Movie-App](https://raw.githubusercontent.com/SudhansuBandha/Movie_App/master/client/public/images/Screenshot%20(11).png)


## Features :
- Fetch details of movies from movie db api
- Fetching details of the particular sleceted movie and display the respective casting
- User login and signup system
- User can comment, like and add movie to their favourite section
- User can view all the movies added to their favourite section



## Frontend (React, Redux, Axios)
- User login and register system is built using redux
- Built the Routes
- Built the Components rendered by each Route. For Home Component, every time the component is mounted, data is being fetched from movie db api .
- For comments, reply, like , favuorite features axios.post request is sent to perform the relevant tasks
- Proxy server is used for connecting frontend with the backend


## Backend (Node-Js, Express,MongoDb, Movie-db Api)
- All the datas for the site is being fetched from movie-db api made for developers
- Token based user authentication is used based on jsonwebtokens
- User related datas are being stored in MongoDb cloud Atlas
- Relevant express routings are performed for comments, replies, likes, favourites features

## Instructions to run locally

``` javascript
 Git clone https://github.com/SudhansuBandha/Movie_App.git
 cd client/
 npm install
 cd server/
 npm install
 need to create dev.js in the config directory and provide MONGO_URI environment variable
 to get connect with MongoDb
 Go back to root folder and run
 npm run dev
 ```
Thank you for visiting and have a prosperous day ahead...







