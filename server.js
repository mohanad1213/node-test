require('dotenv').config()
const cors = require('cors');
const bodayParser = require('body-parser');
const express = require('express')
const app = express()
const mongoose = require('mongoose')
var mongodb = require('mongodb');

const Restaurant = require('./Models/Restaurant');

 mongoose.connect(process.env.DATABASE, { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))

app.use(cors());

app.use(bodayParser.json())

//const subscribersRouter = require('./routes/subscribers')
//app.use('/subscribers', subscribersRouter)


app.get("/",(req,res,next) =>{

    let List = [  {
        "name":"Dummy Name 1",
        "lat" : 25.0111261515831,
        "log" : 55.027898789811435,
        "address":"Dummy Address 1",

    },
    {
        "name":"Dummy Name 2",
        "lat" : 24.8811261515831,
        "log" : 55.327898789811435,
        "address":"Dummy Address 2",

    },
    {
        "name":"Dummy Name 3",
        "lat" : 24.8811261515831,
        "log" : 55.727898789811435,
        "address":"Dummy Address 3",

    }
];
    
  


res.send(List);
})


app.post("/addDummyData",(req,res,next) => {

   
    // let List = [  {
    //     "name":"Dummy Name 1",
    //     "lat":25.201709775809164,
    //     "log":55.39776903053371,
    //     "address":"Dummy Address 1",

    // },
    // {
    //     "name":"Dummy Name 2",
    //     "lat":25.221709775809164,
    //     "log":55.39776903053371,
    //     "address":"Dummy Address 2",

    // },
    // {
    //     "name":"Dummy Name 3",
    //     "lat":25.071709775809164,
    //     "log":55.11776903053371,
    //     "address":"Dummy Address 3",

    // }]
     
    let r= {
            "name":"Dummy Name 3",
            "lat":25.071709775809164,
            "log":55.11776903053371,
            "address":"Dummy Address 3",
    
        }
        var dbConn = mongodb.MongoClient.connect('mongodb://localhost:27017');

        dbConn.then(function(db) {
        db.collection('resapp').insertOne(r);
        });
        res.send('Data received:\n' + JSON.stringify(r));
    
})

app.listen(3000, () => console.log('Server Started'))