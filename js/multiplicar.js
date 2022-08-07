// 3. Criar um arquivo multiplicar.js contendo uma função chamada multiplicar, que deve ser exportada no final do arquivo. Esta função deve receber 2 parâmetros e retornar a multiplicação dos mesmos. Importante:
// a. Contemplar o cenário onde se um dos dois parâmetros for zero, a função retornará zero.

var n1 = document.querySelector('#n1');
var n2 = document.querySelector('#n2');
var resultado = document.querySelector('#resultado');

const multiplicar = (num1, num2) => {
    num1 = parseInt(n1.value);
    num2 = parseInt(n2.value);
    document.querySelector('#numeros').innerText = n1.value + ' × ' + n2.value + ' = ';
    if (n1.value == '' || n2.value == '') {
        document.querySelector('#numeros').innerText = 'Valor Inválido! Digite um número.';
        return resultado.innerHTML = '';
    };
    return resultado.innerHTML = num1 * num2;
};

export default multiplicar;