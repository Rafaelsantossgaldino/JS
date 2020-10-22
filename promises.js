function tempo(ms){ // milliseconds
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms)
    })
}



console.log(ola())