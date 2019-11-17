        /* FOLHA DE EXERCÍCIOS 2 */
      
        /*   1) Resolva o cálculo abaixo e mostre o resultado na caixa reservada para isto. 
        Os ids das caixas são "num_1", "num_2" e "resultado". 
        Para que o resultado saia em negrito, coloque-o dentro da tag <strong>. */

const num1 = parseFloat(document.getElementById("num_1").innerHTML)

const num2 = parseFloat(document.getElementById("num_2").innerHTML)

const soma = num1 + num2

const result = document.getElementById("resultado").innerHTML = soma;
console.log(`---------------------------------------`)
console.log(`primeiro exercício`)
console.log(result);
console.log(`---------------------------------------`)

        /* 2) Crie uma função para converter graus Celsius para Fahrenheit, 
        depois invoque a função usando o valor que está na caixa azul e solte o resultado 
        na caixa amarela. Os ids são "caixa_azul" e "caixa_amarela".

            A formula de conversão é: F = (9 * C / 5) + 32

*/

const grausCelcius = parseFloat(document.getElementById("caixa_azul").innerHTML)

function CelToFar(cel,far) {

};



console.log(`---------------------------------------`)
console.log(`---------------------------------------`)




