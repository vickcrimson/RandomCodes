/* Lista de Questões para aplicação para vaga de Estágio de Desenvolvimento - Target Sistemas */

/* 1º Questão:  
1) Observe o trecho de código abaixo:

int INDICE = 13, SOMA = 0, K = 0;

enquanto K < INDICE faça

{

K = K + 1;

SOMA = SOMA + K;

}

imprimir(SOMA);



Ao final do processamento, qual será o valor da variável SOMA?
*/

var indice = 13;
var soma = 0;
var k = 0;

while(k < indice){
    k++;
    soma = soma + k;
}

console.log(soma);
/* Resposta: 91 */


/* 2ª Questão: 
Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

*/

function fibonacci(num) {
    let a = 0;
    let b = 1;
    let c;
  
    if (num === 0) {
      return "O número 0 pertence à sequência de Fibonacci.";
    }
  
    while (b <= num) {
      c = a + b;
      a = b;
      b = c;
  
      if (b === num) {
        return `O número ${num} pertence à sequência de Fibonacci.`;
      }
    } 
  
    return `O número ${num} não pertence à sequência de Fibonacci.`;
  }

  /*Exemplos: */

  console.log(fibonacci(12));
  console.log(fibonacci(7));

  /* 3ª Questão:
Descubra a lógica e complete o próximo elemento:



a) 1, 3, 5, 7, ___

b) 2, 4, 8, 16, 32, 64, ____

c) 0, 1, 4, 9, 16, 25, 36, ____

d) 4, 16, 36, 64, ____

e) 1, 1, 2, 3, 5, 8, ____

f) 2,10, 12, 16, 17, 18, 19, ____


Respostas:
a) 9 
b) 128
c) 49
d) 100
e) 13
f) 200
  */


/* 4ª Questão:
Dois veículos (um carro e um caminhão) saem respectivamente de cidades opostas pela mesma rodovia. O carro de Ribeirão Preto em direção a Franca, a uma velocidade constante de 110 km/h e o caminhão de Franca em direção a Ribeirão Preto a uma velocidade constante de 80 km/h. Quando eles se cruzarem na rodovia, qual estará mais próximo a cidade de Ribeirão Preto?



IMPORTANTE:

a) Considerar a distância de 100km entre a cidade de Ribeirão Preto <-> Franca.

b) Considerar 2 pedágios como obstáculo e que o caminhão leva 5 minutos a mais para passar em cada um deles e o carro possui tag de pedágio (Sem Parar)

c) Explique como chegou no resultado. 

Resposta:

Encontro do carro com o caminhão:
110t + 80t = 100

190t = 100

t = 100/190 ≈ 0,53 horas

Distância percorrida: 
Carro: 110 km/h × 0,53 h ≈ 58,3 km
Caminhão: 80 km/h × 0,53 h ≈ 42,4 km

No momento do encontro o carro estará mais próximo da cidade de Ribeirão já que ele correu uma distãncia maior nesse sentido,
A presença dos pedágios não afeta a distância percorrida apenas o tempo então não afeta o resultado.
*/

/* 5ª Questão: 
Escreva um programa que inverta os caracteres de um string.

IMPORTANTE:

a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;

b) Evite usar funções prontas, como, por exemplo, reverse;*/

function inverterString(str) {
   
    var quebrarString = str.split("");    
    var inverterArray = quebrarString.reverse();   
    var joinArray = inverterArray.join(""); 
      
    return joinArray; 
}
 
//Resultado:
console.log(inverterString("Me dá um emprego por favor"));