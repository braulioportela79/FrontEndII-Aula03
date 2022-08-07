// 4. Crie um arquivo dividir.js contendo uma função chamada dividir, que deve ser exportada no final do arquivo. Esta função deve receber 2 parâmetros e retornar a divisão dos mesmos. Importante:
// a. Considere o cenário em que se um dos dois parâmetros for zero, a função retornará "Não se pode dividir por zero".

const dividir = (num1, num2) => {
    // if (num1 == 0 | num2 == 0) { return 'Não se pode dividir por zero.' }
    // num1 = parseInt(prompt(`Operação de Divisão:
    
    // Digite primeiro número: `, 0));
    // num2 = parseInt(prompt(`Operação de Divisão:
    
    // Digite segundo número: `, 0));
    // let resultado = confirm(`Resultado:
    // ${num1} / ${num2} = ${dividir(num1, num2)}
    
    // Deseja fazer uma nova operação matemática?
    // `);
    // if (resultado) {
    //     document.location.reload(true);
    // }
    return num1 / num2;
};

export default dividir;

