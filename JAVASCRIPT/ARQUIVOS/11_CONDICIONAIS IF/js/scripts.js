/*
 A sintaze do if no javascript 
 o valor zero é considerado como false

if (bloco da estrutura que fará a comparação) {
 //bloco de código a ser executado se a condição for atendida.
};

*/

console.log('Antes do if');

if (true) {
  console.log('testando o if');
};

console.log('Depois do  if');


var idade = 17;
var idademinima = 18;

if (idade > 18) {
  console.log("Pode fazer habilitação")
};


// if else, executa uma ação caso a condição não seja atingida pela primeira condição

var idade = 17
if (idade > 18) {
  console.log('Pode fazer habilitação');
}
else
console.log("Precisa esperar " + (idademinima - idade) +" anos, para tirar a habilitação"); 



