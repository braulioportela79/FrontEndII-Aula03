// 2. Crie um arquivo subtrair.js contendo uma função chamada subtrair, que deve ser exportada no final do arquivo. Esta função deve receber 2 parâmetros e retornar a subtração dos mesmos.

const subtrair = (num1, num2) => {
    num1 = parseInt(prompt(`Operação de Subtração:
    
    Digite primeiro número: `, 0));
    num2 = parseInt(prompt(`Operação de Subtração:
    
    Digite segundo número: `, 0));
    let resultado = confirm(`Resultado:
    ${num1} - ${num2} = ${subtrair(num1, num2)}
    
    Deseja fazer uma nova operação matemática?
    `)
    if (resultado) {
        document.location.reload(true);
    }
    return num1 - num2;
};

export default subtrair;