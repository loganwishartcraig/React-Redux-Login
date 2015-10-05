# React-Redux-Login
An overly complicated stateful login screen built with React and Redux.

Used to practice the principles of implementing Redux, ES6 syntax, and JSON Web Token authentication.

To start, install the dependencies: 
```
npm install
```

Spin up mongodb
```
mongod
```

Start the node server 
```
node bin/www
```

Open http://localhost:3000/

Make a new account and login using it. 
All requests to the API service need authentication passed either as a 'x-access-token' header, a '?token=XXXX' URL parameter, or have the 'token: XXXX' key value pair in the body of the request.

Connects to a local DB, no records are saved elsewhere. 
Edit JWT secret key or the DB config in config.js

Note: signup page is not react/flux
