const mongoose = require('mongoose');
require('dotenv').config();

// Function to connect to MongoDB using Mongoose
const connectToMongoDB = () => {
  mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Failed to connect to MongoDB:', error);
  });
};

module.exports = { connectToMongoDB };