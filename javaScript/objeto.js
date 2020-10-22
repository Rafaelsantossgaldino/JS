// Objeto conjunto de propiedades
var pessoa = {
    idade: 25,
    altura: 1.85,
    peso: 65,
    sexo: `M`,
    cor: `parda`
}

console.log(pessoa)

// ADICIONANDO METODO AO OBJETO

pessoa.andar = function () {
    return `pessoa andando`
}
pessoa.andar()

/* EXEMPLO DE ALTERACOES AO OBJETO

pessoa.aniversario  = function() {
 pessoa.idade++
}
[Function]
> pessoa
{
  nome: 'rafael',
  peso: 65,
  altura: 1.7,
  sexo: 'mmasculico',
  cor: 'preto',
  andar: [Function],
  idade: 25,
  aniversario: [Function]
}
> pessoa.aniversario()
undefined
> pessoa
{
  nome: 'rafael',
  peso: 65,
  altura: 1.7,
  sexo: 'mmasculico',
  cor: 'preto',
  andar: [Function],
  idade: 26,
  aniversario: [Function]
}
> pessoa.sobrenome= `Soares`
'Soares'
> pessoa
{
  nome: 'rafael',
  peso: 65,
  altura: 1.7,
  sexo: 'mmasculico',
  cor: 'preto',
  andar: [Function],
  idade: 26,
  aniversario: [Function],
  sobrenome: 'Soares'
}
> pessoa.nomecompleto = function(){
... return pessoa.nome+ `` +pessoa.sobrenome
... }
[Function]
> pessoa
{
  nome: 'rafael',
  peso: 65,
  altura: 1.7,
  sexo: 'mmasculico',
  cor: 'preto',
  andar: [Function],
  idade: 26,
  aniversario: [Function],
  sobrenome: 'Soares',
  nomecompleto: [Function]
}
> pessoa.nomecompleto()
'rafaelSoares'
> pessoa
{
  nome: 'rafael',
  peso: 65,
  altura: 1.7,
  sexo: 'mmasculico',
  cor: 'preto',
  andar: [Function],
  idade: 26,
  aniversario: [Function],
  sobrenome: 'Soares',
  nomecompleto: [Function]
}
> pessoa.idade = 25
25
> pessoa
{
  nome: 'rafael',
  peso: 65,
  altura: 1.7,
  sexo: 'mmasculico',
  cor: 'preto',
  andar: [Function],
  idade: 25,
  aniversario: [Function],
  sobrenome: 'Soares',
  nomecompleto: [Function]
}
> pessoa.aniversario()
undefined
> pessoa
{
  nome: 'rafael',
  peso: 65,
  altura: 1.7,
  sexo: 'mmasculico',
  cor: 'preto',
  andar: [Function],
  idade: 26,
  aniversario: [Function],
  sobrenome: 'Soares',
  nomecompleto: [Function]
}
> pessoa.idade = 25
25
> pessoa
{
  nome: 'rafael',
  peso: 65,
  altura: 1.7,
  sexo: 'mmasculico',
  cor: 'preto',
  andar: [Function],
  idade: 25,
  aniversario: [Function],
  sobrenome: 'Soares',
  nomecompleto: [Function]
}
>















*/