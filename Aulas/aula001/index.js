/* Aula 01

let n1 = Number(prompt('Digite um numero:')) ; // Valor string
let n2 = Number(prompt('Digite mais um numero:')) ; // Valor string
let res = n1 * n2 // Resultado contatenado

alert(`A soma entre ${n1} e ${n2} é igual a ${res}`)

*/

/* Aula 02
let nome = prompt('Qual é o seu nome?')

document.write(`<h2>Olá, ${nome}! seu nome tem ${nome.length} letras.</h2>`)

*/

// Aula 03 OPERADORES
/*
let n1 = 6
let n2 = 3
let n3 = 2
let n4 = 4
let res = n1 + n4 / n3

console.log(`${n1} + ${n4} / ${n3} = ${res}`)
*/

/*
let n = 3
n += 4
n -= 5
n *= 4
n /= 2
n **= 2 
n %= 5

console.log(`${n}`)
*/
/*
let n = 10

n += 5

console.log(`${n}`)
*/

// Aula 04

let media = 5.5
let nome = prompt(`Qual é o seu nome?`)
let nota = Number(prompt(`Digite sua nota para verificar:`))
let res = media <= nota ? 'APROVADO' : 'REPROVADO'
let res2 = media <= nota ? 'PARABÉNS' : 'INFELIZMENTE'
let res3 = media <= nota ? '🥳🎉' : '😥'

document.write(`<h2>Olá, ${nome}! ${res2} você foi ${res} ${res3}</h2>`)