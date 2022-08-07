// 1. Crie um arquivo somar.js contendo uma função chamada somar, que deve ser exportada no final do arquivo. Esta função deve receber 2 parâmetros e retornar a soma dos mesmos.

var n1 = document.querySelector('#n1');
var n2 = document.querySelector('#n2');
var resultado = document.querySelector('#resultado');

const somar = (num1, num2) => {

    num1 = parseInt(n1.value);
    num2 = parseInt(n2.value);
    document.querySelector('#numeros').innerText = n1.value + ' + ' + n2.value + ' = ';
    if (n1.value == '' || n2.value == '') {
        document.querySelector('#numeros').innerText = 'Valor Inválido! Digite um número.';
        return resultado.innerHTML = '';
    };
    return resultado.innerHTML = num1 + num2;
};

export default somar;