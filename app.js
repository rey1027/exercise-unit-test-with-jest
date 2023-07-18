// esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// solo un registro en consola para nosotros.
console.log(sum(7,3))

// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

const fromEuroToDollar = (euro)=>{
    let convertDollar = euro * oneEuroIs.USD
    return convertDollar
}

const fromDollarToYen = (dolar) =>{
    let convertYen = (dolar/oneEuroIs["USD"])* oneEuroIs["JPY"]
    return convertYen
}

const fromYenToPound = (yen) =>{
    let convertPound =(yen/oneEuroIs["JPY"])* oneEuroIs["GBP"]
    return convertPound
}

// exporta la función para usarla en otros archivos 
// (similar a la palabra clave `export` cuando se usa webpack)
module.exports = { sum, fromEuroToDollar,fromDollarToYen, fromYenToPound};