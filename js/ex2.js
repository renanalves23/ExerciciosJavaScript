        /* FOLHA DE EXERCÍCIOS 2 */
      
        /*   1) Resolva o cálculo abaixo e mostre o resultado na caixa reservada para isto. 
        Os ids das caixas são "num_1", "num_2" e "resultado". 
        Para que o resultado saia em negrito, coloque-o dentro da tag <strong>. */

const num1 = parseFloat(document.getElementById("num_1").innerHTML)

const num2 = parseFloat(document.getElementById("num_2").innerHTML)

const soma = num1 + num2

const result = document.getElementById("resultado").innerHTML = "<strong>" + soma + "</strong>";
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
   
   return document.getElementById("caixa_amarela").innerHTML = "<strong>" + far + "</strong>"
   
};

console.log(CelToFar(grausCelcius));

console.log(`---------------------------------------`)


          /* 3) Forme um novo array composto pelos 2 últimos elementos do array abaixo.
           Em seguida adicione ao final do novo array mais um grupo composto
            pelos alunos "Mariana", "Felipe" e "Carla". */

 console.log(`--------------Terceiro Exercício-------------------------`)

 var grupos = [ 
  [ "João" , "Maria" ],
  [ "Pedro" , "Joana", "André", "Júlio" ],
  [ "Carolina" , "Helena", "Marcelo" ]
]; 

const novoArray = grupos.slice(1,3); 
console.log(novoArray)
console.log(`----------------segunda parte -----------------------`)

novoArray.push(["Mariana", "Felipe", "Carla"])

console.log(novoArray);

 console.log(`---------------------------------------`)


     /* 4) Considere o objeto abaixo: */
              var curso = {
                'titulo': "Aprenda programação em Python",
                'categoria': ['programação', 'tecnologia', 'python'],
                'n_aval_5_estrelas': 420,
                'n_aval_4_estrelas': 80,
                'n_aval_3_estrelas': 33,
                'n_aval_2_estrelas': 20,
                'n_aval_1_estrela': 4,
                'total_aval': function () {
                  const t_aval = this.n_aval_5_estrelas + this.n_aval_4_estrelas + this.n_aval_3_estrelas + this.n_aval_2_estrelas + this.n_aval_1_estrela;
                  return t_aval;
                },
                'media_aval': function () {
                  //média ponderada
                  const m_aval = ((5 * this.n_aval_5_estrelas) + (4 * this.n_aval_4_estrelas) + (3 * this.n_aval_3_estrelas) + (2 * this.n_aval_4_estrelas) + (1 * this.n_aval_3_estrelas) / (this.n_aval_5_estrelas + this.n_aval_4_estrelas + this.n_aval_3_estrelas + this.n_aval_2_estrelas + this.n_aval_1_estrela));
                  return m_aval;
                } 
            };
        /*
         a) A categoria principal do curso é o primeiro elemento da lista associada à chave 'categoria'.
           Solte esta categoria abaixo, no span que tem id "categoria_principal"
               
        */

 console.log(`-----------------Quarto Exercício----------------------`)
       document.getElementById("categoria_principal").innerHTML = curso.categoria[0]


             /* b) As propriedades n_aval... representam a quantidade de avaliações do curso, de 1 até 5 estrelas. 
             Crie dois métodos: um para retornar o total de avaliações do curso e um para retornar a média de estrelas que 
             tem o curso (exemplo: 4.5). Depois utilize-os para soltar estas informações nas caixas abaixo, que tem os ids 
             "total_aval" e "media_aval". 
             
             ( (valor1 * peso 1) + ( valor 2 * peso 2) + ... ) / ( somatório dos pesos )*/
      
      const total_av = curso.total_aval();
      const media_av = curso.media_aval().toFixed(2); //2 casas decimais

      document.getElementById("media_aval").innerHTML = media_av

      document.getElementById("total_aval").innerHTML = total_av;

 console.log(`---------------------------------------`)

