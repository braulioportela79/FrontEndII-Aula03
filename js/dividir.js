// 4. Crie um arquivo dividir.js contendo uma função chamada dividir, que deve ser exportada no final do arquivo. Esta função deve receber 2 parâmetros e retornar a divisão dos mesmos. Importante:
// a. Considere o cenário em que se um dos dois parâmetros for zero, a função retornará "Não se pode dividir por zero".

var n1 = document.querySelector('#n1');
var n2 = document.querySelector('#n2');
var resultado = document.querySelector('#resultado');

const dividir = (num1, num2) => {
    num1 = parseInt(n1.value);
    num2 = parseInt(n2.value);
    if (num1 == 0 | num2 == 0) {
        document.querySelector('#numeros').innerText = '';
        return resultado.innerHTML = 'Não se pode dividir por zero.'
    };
    document.querySelector('#numeros').innerText = n1.value + ' ÷ ' + n2.value + ' = ';
    if (n1.value == '' || n2.value == '') {
        document.querySelector('#numeros').innerText = 'Valor Inválido! Digite um número.';
        return resultado.innerHTML = '';
    };
    return resultado.innerHTML = num1 / num2;
};

export default dividir;