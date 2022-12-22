// HW #11

getDigitsSum (123.45);
getDigitsSum (280.123);
getDigitsSum (123);

function getDigitsSum (number){
   let num = Math.round(number);
   let res = 0;
   let digit = 0;
    do{
      digit = num % 10;
      res += digit;
      num /= 10;
      num = Math.round(num);
     
     }while(number != 0);
     console.log(res);
      
    //computes sum of all digits in the integer part of the number
    // number may be either negativ or positive or 0
}

function computeExpression(expressionStr){
     
     let res = eval(expressionStr);
     console.log(res);

   
}
computeExpression("9000 / ((10 + 20) ** 2)");



//console.log(computeExpression("9000 / ((10 + 20) ** 2)")) ' //prints 10
//console.log(computeExpressoin("9 + 100 / 2")) ; // prints 59

// function printAnanas() {
//    let str = "a" + +"123a" + "as";
   
    
//     //TODO 
//    //To use only "A" "S"
//    //print "ananas"
// }
// str.toLocaleLowerCase();
// printAnanas() //there should be printed "ananas"

// reverse (1234.56);
// function reverse(number) {
//    let num = 1234.56;
//    let 
     
     


//     //returns string with digits of a given number in the reversed order
//     //number may be either positive or negative
//     //consider only integer  part, fractional part should be removed
//     //example reverse(1234.56) shoude return "4321"
//     //example revers(-1234) should return "-4321"

// }