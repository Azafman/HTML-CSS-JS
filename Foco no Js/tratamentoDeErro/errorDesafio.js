// try {
//      throw new EvalError('Hello', 'someFile.js', 10);
//    } catch (e) {
//      console.log(e instanceof EvalError); // true
//      console.log(e.message);              // "Hello"
//      console.log(e.name);                 // "EvalError"
//      console.log(e.fileName);             // "someFile.js"
//      console.log(e.lineNumber);           // 10
//      console.log(e.columnNumber);         // 0
//      console.log(e.stack);                // "@Scratchpad/2:2:9\n"
// }
let aumentarNumero = (array,numberMy) => {
     if(!array || !numberMy){
          throw ReferenceError('Parametros inexistentes','errorDesafio.js',22)
          //Se eu chamar a função sem parametros -> vou escrever no console somente a mensagem, isto é 'parametros'..., e os dois ultimos parametro ficaram na parte de trás do programa. E se eu quiser depois eu os mostro no console! Lemrando que estes parametros são opcionais.
     }else if (typeof array != 'object' || typeof numberMy != 'number') {
          throw TypeError('O primeiro parametro precisa ser um Array','errorDesafio.js',22);
     } else if (array.length != numberMy) {
          throw RangeError('Os parametros precisam ter o mesmo tamanho!','errorDesafio.js',22)
     }     
     return  '['+ array +'], ' + numberMy;
}
try {
     console.log(aumentarNumero([1,8],2));
} catch (erro){
     if(erro instanceof ReferenceError) {
          console.log('Erro de Referência! ' + erro.message, erro.name );
          // console.log(erro.stack);
     } else if(erro instanceof TypeError){
          console.log('TypeError!');
     }else {
          console.log("Outro tipo de erro!");
          console.log(erro.stack);
     }
}
