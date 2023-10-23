var nome = 'Esta é uma variável do tipo string';
var primeiroNome = 'Tiago';
var segundoNome = 'Robson';

console.log(nome);
console.log(typeof nome);
console.log(typeof "String de variáveis com aspas duplcas")

console.log(primeiroNome + '-'+ segundoNome);

var frase = 'Esta é uma frase complexa';

console.log(frase);

console.log(primeiroNome +" "+frase);


/*
 Escrevendo no documento para o usuário
 
 Obeserve que para escrever um texto entre aspas simples ou duplas, basta envolver toda a frase
 com o oposto do que quer exibir para o usuário, se aspas duplas, simples, se simples aspas duplas
 para por a palara entre aspas.
*/
document.write(' Ele disse : "Olá"');
document.write("Ele disse : 'Olá'");