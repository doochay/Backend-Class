const express = require('express')
const data = require('./data')

const app = express()

app.get('/', (req, res) =>{
    
    res.status(200).send(data)
}
)// read operation

app.post('/data', (re., res) =>{
 console.log(req.body)
 res.status(200).send('data') 
})

