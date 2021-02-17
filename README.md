# NodeJs (Mean Stack App)

Simple App built with MEAN stack.
You can view the map all Restaurants
### Stack Used in this applcation
  - NodeJS
  - ExpressJS
  - MongoDB
  - Angular

### Setting up & Installation Locally
1- clone this repository and run npm install
```
npm install
```

2- create .env file in the root directory and add the Database and Port settings
example (file .env):
```
MONGODB_URI=mongodb://localhost:27017/resapp
SECRET=YOUR_SECRET_HERE
```



3- Start the back-end server using npm start or ``nodemon ``
```
node start
```

4- Start the angular server using the proxy
```
cd frontend
npm start
```