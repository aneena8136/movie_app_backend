const mongoose = require('mongoose')
require('dotenv').config();


mongoose.connect(process.env.MONGODB_URI, {
    dbName: process.env.DB_NAME
})
    .then(() => console.log('connected to mongoDB'))
    .catch(err => console.error('could not connect to mongoDB:', err));