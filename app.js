// const ar = [];
// const ar1 = [1,2,3,4,];
// ar.push(...ar1);
// ar.push('abc');

function getRandomNumber (min, max){
  min = Math.trunc(min);
  max = Math.trunc(max);
  return min + Math.trunc(Math.random() * (max - min + 1));

}

function getRandomMatrix(rows, column, min, max){
  const matrix = [];

  for(let i = 0; i < rows; i++){
      matrix.push([]);
      for(let j = 0; j < column; j++ ){
          matrix[i].push(getRandomNumber(min, max));
      }
  }
   
  
  return matrix;
}
//const matrix = getRandomMatrix(3, 4, 0, 1);

const ar10 = [1,2,3,4,5];
const str = ar10.join('_');

// HTML
// <ul class ="list_class">
//   <li class=" item_class">
//        <div class="white"> </div>
//   </li>
//................
//</ul>
/* <ul class ="list_class">
//   <li class=" item_class">
//        <div class="white"> </div>
//   </li>
//................
//</ul> */
function getHTMLUL(array){
    
  let htmlString =  '<ul class ="list_class">';
  let string = " ";
 for( let i = 0; i < array.length; i++){
  const strClass = array[i] === 0 ? 'white' : 'black';
  
   string = '<li class=" item_class">' + `<div class="${strClass}"> </div>` + '</li>';
    htmlString = htmlString +  string;
     
  }
  htmlString = htmlString + '</ul>';

 return htmlString;

}

function getArray(min, max, size){

   const array = new Array(size);
  for( let i = 0; i < array.length; i++){
      array[i] = getRandomNumber (min, max);
       
  }
  return array;
}
console.log( getHTMLUL(getArray(0, 1, 10)));


const strClass = getRandomNumber(0, 1) === 0 ? 'white' : 'black'
const str1 = "hello word";
const str2 = 'hello' + '"word"';
const str3 = `class ="${strClass}"`;                    // может форматировать ( тильда)

function matrixTransp (matrix){
 
  let m = matrix.length, n = matrix[0].length, column = [];
  for (let j = 0; j < n; j++){
    column[j] = [];

     for (let i = 0; i < m; i++) {
     column[j][i] = matrix[i][j];
   }

}
return column;

}

console.log(matrixTransp (getRandomMatrix(4, 2, 0, 1)));
console.log(matrixTransp (getRandomMatrix(2, 4, 0, 1)));

