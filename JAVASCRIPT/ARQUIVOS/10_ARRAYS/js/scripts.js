/*
 O Arrays é uma lista de itens, no javascript são considerados objetos
 e conta com um tipo de dados unicos (strings/integer)
 e não tem chave valor, e são acessados por índices, e seu primeiro valor é o 0 (zero).
 O array trabalha com colchetes [], quanto objetos trabalha com chaves {}
*/

const arr = [5, "Tiago robson",
             true, {teste : 1,
                 teste : 2}]; // obj = {};
   
console.log(arr);

//São utilizados contendo apenas um tipo de dados (string, integer).
var array2 = [
   1,2,3,4,5,6    
];
console.log(array2);

/*
  Arrays são acessados pelo índice, para acessá-los, 
  chame o nome do objeto array, precedido de colchetes e o número do índice
  que se quer obter o valor.
*/

console.log(arr[1]);
console.log(array2[0]);

/*
 para inserir elementos do arrary,  
 adiciona um índice que ainda não existe no array, mais o elemento que fará
 parte do objeto array.

*/
arr[4] = 'Tauane';

/*
 Para sobrescrever, basta acessar a chave (índice) e alterar o valor.
*/

arr[0] ='Alterei o valor do índice zero (Primeira posição do array)';

console.log(typeof arr);