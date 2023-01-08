const array = [123, 9, 28, 3, 44];
array.sort( function( e1, e2){
  let res = e1.toString().length - e2.toString().length;
  if(!res){
    res = e1 - e2;
  }
  return res;
});
  
console.log(`result of sorting [123, 9, 28, 3, 44] is ${array}`);

//HW #15
//***************************************
//task sort.1
function evenOddSort(array){
   const newArray = array.sort(function(a,b){
    const firstIsEven = a%2 === 0;
    const secondIsEven = b%2 === 1;
     if(a%2 === 0 && b%2 === 0){
      return a - b;
     } else if(a%2 === 0 && b%2 === 1){
      return a;
     }



   })
    
  return newArray;
  
  
  //TODO
  // sort array of number in the order even numbers go before the odd ones
  //example input array [20, -10, 333, 1000, 552, 7, -7] => [20, -10, 1000, 552, 333, 7, -7]

}

console.log (evenOddSort([20, -10, 333, 1000, 552, 7, -7]));

//task sort.2
function evenAscOddDesc(array){
   


  //TODO
    // sort array of number in the order even numbers go before the odd ones
    //  example input array [20, -10, 333, 1000, 552, 7, -7] => [333, 7, -7, 20, -10, 1000, 552]
}

//task sort. 3
function eventAscOddDesc(array){
  //TODO
  //sort array of number in the order even numbers go before the odd ones
  //even numbers should be in the ascending order, odd numbers should be in the desce
  //example input array [20, -10, 333,1000,552,7,-7] => [-10, 20, 552, 1000, 333, 7, -7]

}
//************************************************************************ */

//reduce
//find sum of the numbers in an array
function sum(array){
  const res = array.reduce(function(res, cur){
    return res + cur;
  });
  return res;

}
console.log(`sum([1,2,3,4,5]) return ${sum([1,2,3,4,5])}`);

console.log( [1, 2, 3, 4].reduce(function (x, y){
  console.log(x, y);
  return x + y;
})); //1- function call x = 1, y = 2; 2-function call x = undefined, y = 3; 3-th x = unde

console.log([[0, 1], [2, 3]].reduce(
  (acc, cur) => {
    return acc.concat(cur);
  },
  [1,2]
));

//HW #15
//task reduce.1
function getMin(array) {
  const res = array.reduce(function(a, b){
    return a < b ? a : b;
  });
  return res;
  
}
console.log( `getMin ${ getMin([20, -10, 333, 1000, 552, 7, -7])}`);


//task reduce.2
function getMax(array) {
    const res = array.reduce(function(a, b){
    return a > b ? a : b;
  });
  return res;
  
}
console.log( `getMax ${ getMax([20, -10, 333, 1000, 552, 7, -7])}`);

  //TODO
  //find and returns maximal value of array


//  task  reduce.3
function getAverage(array) {
  const res = array.reduce(function(a, b){
    return a + b;
  
  });
  return Math.trunc(res / array.length);
  
    //TODO
  //find and returns average value of array
}
console.log( `getAverage ${ getAverage([20, -10, 333, 1000, 552, 7, -7])}`);

//task reduce.4

function getMinMaxAvg(array) {
  console.log( `getAverage ${ getAverage(array)},getMax ${ getMax(array)}, getMin ${ getMin(array)}`);
  
  //TODO
  //using one reduce call to get minimal, maximal and Average
}
 getMinMaxAvg([20, -10, 333, 1000, 552, 7, -7]);