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

console.log(`----------Segundo exercício----------------`)

const grausCelcius = parseFloat(document.getElementById("caixa_azul").innerHTML)

function CelToFar(cel) {
   let far = (cel * 9 / 5) + 32;
   
   return document.getElementById("caixa_amarela").innerHTML = far
   
};

console.log(CelToFar(grausCelcius));

console.log(`---------------------------------------`)


          /* 3) Forme um novo array composto pelos 2 últimos elementos do array abaixo.
           Em seguida adicione ao final do novo array mais um grupo composto
            pelos alunos "Mariana", "Felipe" e "Carla". */

 console.log(`--------------Terceiro Exercício-------------------------`)




 console.log(`---------------------------------------`)


