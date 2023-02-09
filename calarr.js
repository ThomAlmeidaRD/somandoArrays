var numerosACalcular = [4, -7, 9, -6, 10, 17]
var numerosPositivos = []
var numerosNegativos = []

function calcularArrays() {

    for (var i = 0; i < numerosACalcular.length; i++) {
        if (numerosACalcular[i] >= 1) {
            numerosPositivos.push(numerosACalcular[i])
        } else {
            numerosNegativos.push(numerosACalcular[i])
        }
    }

    //exibindo numeros separados
    console.log('Positvos: ' + numerosPositivos)
    console.log('Negativos: ' + numerosNegativos)


    //calculando 
    var somaPos = numerosPositivos.reduce((a, b) => a + b, 0)
    var somaNgt = numerosNegativos.reduce((a, b) => a + b, 0)
    
    console.log('Soma dos Positivos: ' + somaPos)
    console.log('Soma dos Negativos: ' + somaNgt)


}

calcularArrays()
