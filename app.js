//HW #14 (2)
function getNumbersWithDigitsAmount(digitsAmount, array) {
    //takes: digitAmount - given number of digits; array - any array of numbers
    //returns array of only numbers from the given array comprising of the given number of digits
    //examples: getNumbersWithDigitsAmount (3, [1, 100, -100, 25, 1000]) returns [100, - 100]
    //

    const getNumbers = array.filter(function(number){
       let str = String(number).length;
        if(String(number).indexOf('-') == 0 ){
         str = str -1;
        }
        return str == digitsAmount;
                              
    })
  return getNumbers;

 }
console.log(getNumbersWithDigitsAmount(4, [1, 100, -100, 25, 1000]));