let lista = [0,1];

function fibbonacci(n){
  let i = 0; 
  while(lista.indexOf(n) == -1){
    i++;
    lista.push(lista[i-1]+ lista[i])
   }
  }

fibbonacci(13)
console.log('1.',lista,'\n\n')

// 
let countA = 0;
function find(string){
  for(let i = 0;i<string.length;i++){
    
    if(string[i] == 'a' || string[i] == 'A'){
      countA++;
    }
  }
}
find('stringaa')
console.log('2.',countA,'\n\n')


// 
var indice = 12;
var soma = 0;
var k = 1;
while(k<indice){
  k = k+1;
  soma = soma + k;
}
console.log('3.',soma,'\n\n')

// 
console.log('4.',)
console.log('Lógica\na) 2+\nb)2x\nc)soma pela ordem dos numeros impares\nd)valores pares em ordem ao quadrado\ne)fibonaccu\ne)numeros que começam com d','\n')
console.log(
  'a) 1,3,5,7,9 \nb)2, 4, 8, 16, 32, 64 ,128\nc) 0, 1, 4, 9, 16, 25, 36, 49\nd)4, 16, 36, 64, 100\ne) 1, 1, 2, 3, 5, 8, 13\nf) 2,10, 12, 16, 17, 18, 19,200','\n'
)
// 
console.log('5. Eu acionaria 2 interruptores, caso encontrasse a sala com luz desligada saberia que é o interruptor desligado, caso estivesse acessa saberia que é um dos dois, na segunda vez desligaria 1 interruptor que está acesso e iria na mesma sala se na primeira ida estivesse acesso ou em outra caso não estivesse para verificar se ela ainda está acessa confirmando qual interruptor é.')