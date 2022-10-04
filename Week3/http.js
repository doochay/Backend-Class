const http = require('http')
//console.log(http)

const server = http.createServer((req, res)=>{
    res.write('home')
    res.end()
})



server.listen(5000,()=>{
    console.log('server is working')
})