/*
Operadores de comparação

 São utilizados nas estruturas de condições;
 Temos os seguintes comparadores

  == : Verifica se o valor da esquerda é IGUAL ao valor da direita.
  != : Verifica se o valor da esquerda é DIFERENTE do valor da direita.
  >  : Verifica se o valor da esquerda é MAIOR do valor da direita.
  <  : Verifica se o valor da esquerda é MENOR do valor da direita.
  >= : Verifica se o valor da esquerda é MAIOR OU IGUAL do valor da direita.
  <= : Verifica se o valor da esquerda é MENOR OU IGUAL do valor da direita.

  Apartir de uma comparação, temos uma estrutura de true ou false.

*/

var idade = 18;
var idademinima = 18;
var possuicarro = 1;

if (idade >= idademinima) {
 console.log ("Ápto para o processo de habilitação");
};

if (idade <= idademinima) {
  console.log("Inápto para o processo de habilitação"); 
};

if (possuicarro) {
  console.log('possui carro');
};

var nome = 'Tiago';

 if (nome == 'Tiago') {
   console.log('O seu nome é ' + nome);
 };

var nome = 'Mateus';

if (nome != 'Tiago') {
 console.log("Você não é o Tiago");
};

if (20 > 10){
 console.log("Passou!");
};

if (100 < 20) {
 console.log("passou2");
};

