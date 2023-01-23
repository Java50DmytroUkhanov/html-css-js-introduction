let field = "salary";
// console.log(employees[0][field]);

function displayFieldValue(employees,index,field){
    console.log(employees[index][field]);
}
// displayFieldValue(employees, 3, "bithYear") 
// employees[0].salary = 20000;
// employees[0].department = "QA";
// displayFieldValue(employees, 0, "department");
// delete employees[0].department
// displayFieldValue(employees, 0, "department");

function computeMinMaxAvgSalary(employees){
    const res = employees.reduce((res, empl) => {
        if(res.minSalary > empl.salary){
            res.minSalary = empl.salary;
        } else if( res.maxSalary < empl.salary){
            res.maxSalary = empl.salary;
        }
        res.avgSalary += empl.salary;
        return res;
        
    }, {minSalary: employees[0].salary, maxSalary: employees[0].salary, avgSalary: 0});
    res.avgSalary /= employees.length;
    return res;
}
function displayValue(minMaxAvg, field){
    console.log( `value of the field ${field} is ${minMaxAvg[field]}`)

};
const minMaxAvg = computeMinMaxAvgSalary(employees);
displayValue(minMaxAvg,"avgSalary");
displayValue(minMaxAvg,"minSalary");
displayValue(minMaxAvg,"maxSalary");

const strings = ["b", "xyz", "lmn", "xyz", "lmn", "xyz", "a"];
//assumed result:
//xyz -> 3
//lmn -> 2
//a -> 1
//b -> 1
function displayStringOccurrences(strings) {
    const stringOccurrences = getStringOccurrences(strings);
    const arrayOccurrences = Object.entries(stringOccurrences);
    arrayOccurrences.sort(stringComp);
    arrayOccurrences.forEach(entry => console.log(`${entry[0]} -> ${entry[1]}`));

}
function getStringOccurrences(strings) {
    const res = {};
    strings.forEach(str => {
        if(!res[str]) {
            res[str] = 1;
        } else {
            res[str]++;
        }
    });
    return res;
}
function stringComp(entry1, entry2) {
    let res = entry2[1] - entry1[1];
    if(res == 0){
        res = entry1[0] < entry2[0] ? -1 : 1
    }
    return res;
}
displayStringOccurrences(strings);
//HW #19
function getMostPopulatedCountry(employees){
    //TODO
    //returns country with most amount of employees
    let res = '';
    const objectCountry = getCountry(employees);
    const arrayCountry = Object.entries(objectCountry);
    arrayCountry.sort((a, b) => a[1] - b[1]);
    let length = arrayCountry.length - 1;
    res = arrayCountry[length][0];
    return res;

}
console.log(getMostPopulatedCountry(employees));

function getCountry(employees){
    const array = {};
    employees.forEach(empl => {
      if(!array[empl.address.country]){
        array [empl.address.country] = 1;
      }else{
        array [empl.address.country]++;
      }
      
    });
    return array;
}

function getMostPopulatedCountries(employees, counter){
    //return a given number (conter) of countries with most amount of employees
    



}
function isAnagram(word, anagram) {
  let res = false;
    //TODO
    //returns true if a given anagram is indeed an angram of a given word
    //anagram must have the same length as word
    //anagram must have only the same letters as word
    //hello anagram examples: elolh, olleh, ohell, lehol
    //exampls non-anagrams: eloll, ...
      if(anagram.length === word.length){
        const str1 = anagram.split('');
        const str2 = word.split('');
        str1.sort();
        str2.sort();
        let st = str1.join('');
        let st2 = str2.join('');
       res = (st === st2);
      }
   
   return res;
}

console.log(isAnagram('elolh','olleh'));