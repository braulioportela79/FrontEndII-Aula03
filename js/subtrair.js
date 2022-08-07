// 2. Crie um arquivo subtrair.js contendo uma função chamada subtrair, que deve ser exportada no final do arquivo. Esta função deve receber 2 parâmetros e retornar a subtração dos mesmos.

var n1 = document.querySelector('#n1');
var n2 = document.querySelector('#n2');
var resultado = document.querySelector('#resultado');

const subtrair = (num1, num2) => {
    num1 = parseInt(n1.value);
    num2 = parseInt(n2.value);
    document.querySelector('#numeros').innerText = n1.value + ' - ' + n2.value + ' = ';
    return resultado.innerHTML = num1 - num2;
};

export default subtrair;