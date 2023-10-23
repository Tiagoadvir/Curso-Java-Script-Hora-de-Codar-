/*
  Estrudura condicional if e else
  estrutura

  if (Bloco comparativo ){
  Bloco a ser executado caso atenda a condição if
} else {
   bloco a ser executado caso não atenda a condição do if
} 

*/
var nome = 'tiag';

if (nome == 'tiago'){
 console.log("O nome dele é Tiago")
} else {
  console.log("Ele possui outro nome");
};

var nome="Tauan";

if (nome == "Tiago") {
  console.log("O nome dele é tiago");
} else if (nome == "Tauane") {
  console.log ('O nome dele é Tauane');
} else {
   console.log("O nome não atende a nenhum critério comparativo");
};

var idade = 19;

if (idade  > 20 ){
  console.log('Ele pode entrar na festa');
} else if (idade >= 18) {
  console.log("ele so pode entrar com autorização");
};