// 1. Criar um arquivo calculadora.js no qual serão necessários os quatro arquivos feitos anteriormente.
import somar from './somar.js';
import subtrair from './subtrair.js';
import multiplicar from './multiplicar.js';
import dividir from './dividir.js';

let calculadora = prompt(`Escolha uma operação matemática:

1 - Somar
2 - Subtrair
3 - Multiplicar
4 - Dividir
`);
let num1 = 0;
let num2 = 0;

if (calculadora == 1) {
    num1 = parseInt(prompt(`Operação de Soma:
    
    Digite primeiro número: `));
    num2 = parseInt(prompt(`Operação de Soma:
    
    Digite segundo número: `));
    alert(`Resultado:
    ${num1} + ${num2} = ${somar(num1, num2)}`)
} else if (calculadora == 2) {
    num1 = parseInt(prompt(`Operação de Subtração:
    
    Digite primeiro número: `));
    num2 = parseInt(prompt(`Operação de Subtração:
    
    Digite segundo número: `));
    alert(`Resultado:
    ${num1} - ${num2} = ${subtrair(num1, num2)}`);
} else if (calculadora == 3) {
    num1 = parseInt(prompt(`Operação de Multiplicação:
    
    Digite primeiro número: `));
    num2 = parseInt(prompt(`Operação de Multiplicação:
    
    Digite segundo número: `));
    alert(`Resultado:
    ${num1} * ${num2} = ${multiplicar(num1, num2)}`);
} else if (calculadora == 4) {
    num1 = parseInt(prompt(`Operação de Divisão:
    
    Digite primeiro número: `));
    num2 = parseInt(prompt(`Operação de Divisão:
    
    Digite segundo número: `));
    alert(`Resultado:
    ${num1} / ${num2} = ${dividir(num1, num2)}`);
} else {
    alert(`Opção inválida. Escolha um número entre 1 e 4.`);
};

// 2. Executar a função que permite adicionar e a função que permite subtrair, passando como argumentos quaisquer dois números. Mostrar os resultados no console.
console.log(`${num1} + ${num2} = ${somar(num1, num2)}`);
console.log(`${num1} - ${num2} = ${subtrair(num1, num2)}`);

// 3. Executar a função que permite a multiplicação, passando como argumentos quaisquer dois números. Mostrar o resultado no console.
// 4. Executar a função que permite multiplicar, passando agora como um dos dois argumentos, o número zero. Mostrar o resultado no console.
console.log(`${num1} * ${num2} = ${multiplicar(num1, num2)}`);

// 5. Executar a função que permite a divisão, passando como argumentos quaisquer dois números. Mostrar o resultado no console.
// 6. Executar a função que permite dividir, passando agora como um dos dois argumentos, o número zero. Mostrar o resultado no console.
console.log(`${num1} / ${num2} = ${dividir(num1, num2)}`);

// ****************************************************************************************************

// 1. O que teria acontecido se, em vez de gerar um arquivo para cada operação matemática, tivéssemos programado tudo no mesmo arquivo?
// R. O arquivo teria ficado com múltiplas linhas de código, dificultando sua manutenção.

// 2. Por que o melhor caminho é gerar diferentes arquivos e depois requerê-los em um único arquivo?
// R. Facilidade de manutenção e entendimento do código.

// 3. Esta metodologia de trabalho será uma constante a partir de agora?
// R. Sim, pois facilita no entendimento do código.
