const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado'

console.log(resultado(7.1))
console.log(resultado(6.7))


let a = 3

global.b = 123
this.c = 456

console.log(a)
console.log(global.b)
console.log(this.c)
console.log(module.exports.c)
console.log(module.exports === this)

//criando uma variavel maluca: sem var e let:
abc = 3
console.log(global.abc)