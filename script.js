const bar=document.getElementById('bar');
const close=document.getElementById('close');
const nav=document.getElementById('navbar');

if(bar)
{
    bar.addEventListener('click',()=> {
        nav.classList.add('active');
    })
}
if(close)
{
    close.addEventListener('click',()=> {
        nav.classList.remove('active');
    })
}


/* MOngoDB database */

// const express = require('express');
// const bodyParser = require('body-parser');
// const { MongoClient } = require('mongodb');

// const app = express();
// const port = 3000;

// app.use(bodyParser.urlencoded({ extended: true }));

// // MongoDB connection URL
// const uri = 'mongodb://localhost:27017';
// const client = new MongoClient(uri);

// // Connect to MongoDB
// client.connect().then(() => {
//     console.log('Connected to MongoDB');
// }).catch(err => {
//     console.error('Error connecting to MongoDB', err);
// });

// // Route to handle form submission
// app.post('/submit', (req, res) => {
//     const { email, password } = req.body;

//     // Insert data into MongoDB
//     const collection = client.db('wema').collection('data');
//     collection.insertOne({ email, password })
//         .then(result => {
//             console.log('User data inserted:', result.insertedId);
//             res.send('Data inserted successfully');
//         })
//         .catch(err => {
//             console.error('Error inserting data:', err);
//             res.status(500).send('Error inserting data');
//         });
// });

// app.listen(port, () => {
//     console.log(`Server listening at http://localhost:${port}`);
// });
