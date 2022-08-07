// 1. Crie um arquivo somar.js contendo uma função chamada somar, que deve ser exportada no final do arquivo. Esta função deve receber 2 parâmetros e retornar a soma dos mesmos.

const somar = (num1, num2) => {
    num1 = parseInt(prompt(`Operação de Soma:
    
    Digite primeiro número: `, 0));
    num2 = parseInt(prompt(`Operação de Soma:
    
    Digite segundo número: `, 0));
    let resultado = confirm(`Resultado:
    ${num1} + ${num2} = ${somar(num1, num2)}
    
    Deseja fazer uma nova operação matemática?
    `)
    if (resultado) {
        document.location.reload(true);
    }

    return num1 + num2;
};

export default somar;


