// 2) Dado a sequência de Fibonacci,

// escreva um programa na linguagem que desejar onde, informado um número, 

// ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

// IMPORTANTE:

// Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;

const fibonacciFunc = (inicial) => {
    var numero = 0;
    var ultimo = 2;
    var penultimo = 1;
    if (inicial <= 2) {
        return console.log(numero,  'não pertence a sequencia');
    } else {
       for (let count = 3; count <= inicial; count += 1) {
        numero = ultimo + penultimo;
        penultimo = ultimo;
        ultimo = numero;
       }
    }
    return console.log(numero,  'pertence a sequencia');
}

fibonacciFunc(3)