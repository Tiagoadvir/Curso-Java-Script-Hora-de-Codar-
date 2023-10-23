/*
 Sintaxe para criar um objeto em java script
*/

var obj = {
    nome: 'Tiago',
    idadde: 34,
    profissao: 'Desenvolvedor',
    estatrabalhando : true
     
};

console.log(obj);
console.log(typeof obj);

/*
 Acessando uma propriedade do objeto
 chama o objeto e com um ponto(.), a propriedade que quer fazer uso   
*/

console.log(obj.nome);
console.log(obj.idadde);
console.log(obj.profissao);

console.log('O meu nome é '+ obj.nome, ' e minha profissão é ' + obj.profissao);

obj.nome = 'Tauane';

console.log('A propriedade nome do objeto foi mudado de Tiago para ' + obj.nome);

// adicionando uma nova propriedade no obj

obj.graduacao = true;
console.log(obj);