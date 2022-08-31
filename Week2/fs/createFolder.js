const fs = require('fs')

//check if folder already exist
//create new folder if that folder doesnt already exist

try{

    if(!fs.existsSync('ios')){

        fs.mkdirSync('ios')
        console.log('successful')
    }


} catch(error){
    console.log(error)
}