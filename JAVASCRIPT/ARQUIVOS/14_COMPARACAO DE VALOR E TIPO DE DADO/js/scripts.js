/*
 Comparação de valor e tipos de dados 
 javascript ===(igual) e !==(diferente) 
 usado para comparar valor e tipo de dado

 Ao colocar no comparador ==, compara o valor, ao colocar === voce está comparando o tipo de dados,
 assim garante que estará defato recebendo um número ou um string, do contrario, se os tipos não forem iguais, 
 o teste não será executado.
*/ 
var numero = 5;

// comparando o valor...
if (numero == 5) {
   console.log('O número é 5');
};

//comparando o valor e tipo...
numero = 6;

if (numero === '6') {
  console.log('Embora o número seja igual, o tipo é diferente', +
              'pois estou comparando o número com string, não entrará na condição');
};

// condição aceita pois tipo e valor são numericos resultando num true
if (numero === 6) {
  console.log('Condição aceita, pois comparou o número e o tipo e o número é ' + numero +' e o tipo é ' + typeof numero);
};

numero = 4;
if (numero !== 5) {
  console.log('O número não é 5 do típo number');
};