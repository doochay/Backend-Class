const express =  require('express')

const app= express()

app.get('/about', (req, res)=>{
    res.status(200).send('Hello from express Server')
})

app.listen(3000,() =>{
    console.log('Server is up and running')
})