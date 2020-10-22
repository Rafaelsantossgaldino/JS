// File system (HD) salva e carrga coisas do HD
const fs = require('fs')

console.log('inicio')
fs.readdir('./', function (err, lista){
    if(err){

        console.log('erro', err)
    } else {
        console.log(lista)
    }
})
console.log('fim')

