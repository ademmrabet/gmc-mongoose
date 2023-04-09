// Import required packages
const express = require('express');
// Load environment variables from .env file
require('dotenv').config();
const Person = require('./models/person'); // Require the Person schema
const { connectToMongoDB } = require('./config/db'); // Require the database connection



// Create Express app
const app = express();


// Connect to MongoDB Atlas
connectToMongoDB();

// Example: Route for getting all persons
app.get('/persons', (req, res) => {
    // Use your Person model to fetch data from MongoDB
    // Replace this example code with your actual implementation
    Person.find()
      .then(persons => {
        res.json(persons);
      })
      .catch(err => {
        console.error(err);
        res.status(500).send('Error fetching persons');
      });
  });


app.listen(process.env.PORT ||3000, (err)=>{
    if (err) {
        console.log('error')
    }
    console.log(`Server is runnig ${process.env.PORT}`)
})



