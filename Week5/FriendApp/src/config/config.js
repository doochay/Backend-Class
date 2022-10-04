const mongoose = require('mongoose');

const connectDb = () =>{
    mongoose.connect(`mongodb+srv://doochay:rickie007@cluster0.w73qd6a.mongodb.net/?retryWrites=true&w=majority`)
console.log('connect to database')




}

module.exports = connectDb