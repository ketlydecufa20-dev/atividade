//Imprima os primeiros 10 números da sequência de Fibonacci utilizando um laço de repetição.
//0 + 1 = 1 , 1 + = 2




var antecessor = 0
var anterior = 1
var atual = 0

console.log(antecessor)
console.log(anterior)

for (var i = 3; i <= 10; i++) {
    atual = anterior + antecessor  
    console.log(atual)

    antecessor =  anterior
    anterior= atual 
     }

