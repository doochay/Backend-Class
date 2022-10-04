//OS module- Operating System Module
//Gives information about the Operating system used eg memory etc.
//Its a core module that comes with node. Its inbuilt

const os = require('os')
//console.log(os)
//console.log('tony')


const userInfo = os.userInfo()
console.log(userInfo)