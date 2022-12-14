const express = require('express')
const app = express()
const port = 4000
const bodyParser = require("body-parser");
const cors = require('cors');

// cors is required to allow the browser to get information from the server
app.use(cors());
app.use(function(req, res, next) {
res.header("Access-Control-Allow-Origin", "*");
res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
res.header("Access-Control-Allow-Headers",
"Origin, X-Requested-With, Content-Type, Accept");
next();
});

// allows us to process the body of the http request
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}));  
app.use(bodyParser.json());

// routes the http request usually a string of the url
app.get('/', (req, res) => {
  res.send('Hello World!')
})

// send  back the json data when the server hears /api/books
app.get('/api/books', (req,res)=>{
    const myBooks = [
        {
            "title": "Learn Git in a Month of Lunches",
            "isbn": "1617292419",
            "pageCount": 0,
            "thumbnailUrl":
            "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/umali.jpg",
            "status": "MEAP",
            "authors": ["Rick Umali"],
            "categories": []
            },
            {
            "title": "MongoDB in Action, Second Edition",
            "isbn": "1617291609",
            "pageCount": 0,
            "thumbnailUrl":
            "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/banker2.jpg",
            "status": "MEAP",
            "authors": [
            "Kyle Banker",
            "Peter Bakkum",
            "Tim Hawkins",
            "Shaun Verch",
            "Douglas Garrett"
            ],
            "categories": []
            },
            {
            "title": "Getting MEAN with Mongo, Express, Angular, and Node",
            "isbn": "1617292036",
            "pageCount": 0,
            "thumbnailUrl":
            "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/sholmes.jpg",
            "status": "MEAP",
            "authors": ["Simon Holmes"],
            "categories": []
            }  
    ]

    res.json({
        books: myBooks
    })
})

// listening for the post request
// take the data through the post request and for now log it to the console
app.post('/api/books', (req,res)=>{
    console.log(req.body);
    res.send('Data recieved');

})

// server listens for the url
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})