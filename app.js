
//HW 12

// let str = "123m" 
// let num = parseInt(str) + 10;
// let str1 = "js.5"
// let numInt = parseInt(str1, 32);
// let numFloat = parseFloat(str1);

function myParseInt(str, base) {
 
  base = base || 10;
    let res = 0;
    let res2 = 0;
    res2 = str.split(".");
    str = res2[0];
   
    for(let i = 0; i < str.length; i++ ){
       
         if( str[i] > "9") {
          i = str.length;
          }else{
            res = res * base + getCode(str[i]);
          }
      }
      


    return str[0] == "-" ? (res * (-1)): res; 

}
function getCode(symbol) {
     symbol = symbol.toLowerCase();
     const codeA = 'a'.charCodeAt();
     const res = symbol <= '9'? +symbol : symbol.charCodeAt() - codeA + 10;
     return res;
}

let str1 = "ff";
let str2 = "-123";
let str22 = "Java";
let str3 = "123m";
let str4 = "123.5";
let num = parseInt(str3, 16);
let myNum = myParseInt(str3, 16);
num = parseInt(str2);
myNum = myParseInt(str2);
num = parseInt(str22, 36);
myNum = myParseInt(str22, 36);
num = parseInt(str3);
myNum = myParseInt(str3);
num = parseInt(str4);
myNum = myParseInt(str4);

let number = 255;
let str = "" + number;
str = number.toString(16);

function myToString(number, base){
  let res = '';
  let res2 = '';
  base = base || 10;
   let abs = Math.abs(number);
  num = Math.trunc(abs);
  let num2 = number % 1;
 res = getString(num,base);


   if(num2 > 0){
    let num3 = 0;
    let num4 = 0;
do{
    num2 = num2 * 10;
    num3 = Math.trunc(num2);
     num4 = num3 % 10;
     
     

}while(num4 != 0);
     num2 = num3 /10;
      

   }
   res2 = getString(num2,base);

  if(number < 0){
    res = "-" + res;
  }
 
 return num2 == 0 ? res : res + "." + res2;
 
}


function getString(num,base){
  let res ='';
  do{
    const digit = num % base;
    const symbol = getSymbol(digit);
    res = symbol + res;
    num = Math.trunc(num / base);
     
        
  }while(num);
return res;
}

function getSymbol (digit){
    const codeA = 'a'.charCodeAt();
    let symbol;
    if(digit < 10){
   symbol = "" + digit;

    }else{
        const codeAscii = digit - 10 + codeA;
        symbol = String.fromCharCode(codeAscii);
    }
    return symbol;

}
let num100 = 990500;
let str100 = num100.toString();
let myStr100 = myToString(num100);
str100 = num100.toString(36);
myStr100 = myToString(num100, 36);
num100 = 123.45;
str100 = num100.toString(16);
myStr100 = myToString(num100, 16);