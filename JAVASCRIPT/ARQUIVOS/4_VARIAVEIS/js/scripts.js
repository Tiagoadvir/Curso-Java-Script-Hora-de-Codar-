var teste = 1;

console.log(teste);

//variavel global, ela sobreescve uma variável global com o mesmo none
teste = 'tiago robson da silva';

console.log(teste);

/*var camelcase, consistem em nomes 
compostos onde o primero nome -e com letras minusculas, e as demais do primeiro nome com letra maiúscula*/

var meuPrimeiroNome ='Tiago';
var meuSobreNome ='Robson';

console.log(meuPrimeiroNome);
console.log(meuSobreNome);


/*
 Outras formas de declarar variáveis são
    let e o const
  funcionará da mesma forma que o var, porém existe usuabilidades específicas  
*/

let varLet = 'Variável declarada com o tipo let';
console.log(varLet);

const  varconst = 'Variável declarada com o tipo const';

console.log(varconst);

/*
 É possivel declarar variáveis sem valores, e posteriormente atribuir valores a ela
*/

var meunome;

console.log(meunome);

meunome = 'Populei a variável sem valore atribuido, como meu nome';

console.log(meunome);
