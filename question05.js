// 5) Escreva um programa que inverta os caracteres de um string.

const invertString = (string) => {
    var reverse = '';
    for (var i = string.length - 1; i >= 0; i -= 1) {
        reverse += string[i]
    }
    return reverse;
}
console.log(invertString('amor'))

