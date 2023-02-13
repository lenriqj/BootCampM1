'use strict';

function BinarioADecimal(num) {
  var arrNumeros=[];
  var pow=num.length -1;
  for(let i of num){
    arrNumeros.push(
      Number(i) * 2 ** pow
    )
    pow--;
  }
  var decimal=0;
  for(let i of arrNumeros){
    decimal += i;
  }

  return decimal;

  
  //return parseInt(num, 2);
   
}


  



function DecimalABinario(num) {
  var arr=[];
  var decimal=Number(num);
 while(decimal !== 0){
 arr.push(decimal % 2);
 decimal = Math.floor(decimal / 2);
  
  
 }
 return arr.reverse().join("");

}
console.log(DecimalABinario("11"));

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
