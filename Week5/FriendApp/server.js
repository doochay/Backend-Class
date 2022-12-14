const express = require('express')
const router = require(`./src/router/friendsRouter`)
const {logger, sayHi} = require(`./src/middleware/logger`)
const connectDb = require('./src/config/config')
// const sayHi= require(`./src/middleware/sayHi`)
const app = express()
app.use(express.json())

//middleware


app.get('/', (req, res) =>{
    res.status(200).send('Homepage')
})

app.use(`/data`, router)



connectDb()
app.listen(5000, ()=>{
    console.log('Server is up and running')
})