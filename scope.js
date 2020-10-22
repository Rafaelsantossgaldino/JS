const scopeGlobal = 1

const teste = function () {
    // local scope globa
    console.log(scopeGlobal)
    const var0 = 20
    function outroTeste() {
        // scope 2
        const var1 = 10
        console.log(var0, var1)	    
    }
    if(var0 === 1 ){
        // scope 3
        const scope3 = 122
    }
    for (let i=0; i<10; i++){
        //scope 4
        console.log(i)
    }
    outroTeste()
}
teste()