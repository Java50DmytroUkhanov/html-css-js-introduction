const employee1 = {id: 123, name: "Vasya", birthYear: 2000,salary: 15000, address: {city: "Lod", country: "Israel"}};
const employee2 = {id: 123, name: "Vasya", birthYear: 2000,salary: 15000, address: {city: "Lod", country: "Israel"}};
console.log(`employee1 == employee2 is ${employee1 == employee2}` );
const employee3 = employee1; 
console.log(`employee3 == employee1 is ${employee3 == employee1}` );
employee3.salary = 20000;
console.log(`employee1 salary = ${employee1.salary}`);
function createEmployee(id, name, bithYear, salary, city,country) {
    return {id, name, bithYear,salary, address:{city, country} };
}

const employees = [
    createEmployee(123, "Vasya", 2000, 15000, "Lod", "Israel"),
    createEmployee(124, "David", 1975, 15050, "Tel Aviv", "Israel"),
    createEmployee(125, "Sara", 1985, 20000, "New York", "USA"),
    createEmployee(126, "Abraham", 1990, 13000, "London", "UK"), 
    createEmployee(127, "Moshe", 2000, 15000, "Rehovot", "Israel"),
    createEmployee(128, "Goga", 1993, 10000, "Tbilisi", "Gorgia"),
    createEmployee(129, "Sash", 2000, 25000, "Ramat Gan", "Israel"),
    createEmployee(130, "Victor", 2003, 10000, "Arad", "Israel")
]
//const index = employees.indexOf( createEmployee(126, "Abraham", 1990, 13000, "London", "UK")) // not right!!
const index = employees.findIndex(function(empl){
    return empl.id === 126;
})
const employee = employees.find(function(empl){
    return empl.id === 126;
})

//HW # 18
function getEmployee(employees, id) {
    //TODO
    //returns reference to an Employee object with a given id value
     const employee = employees.find(function(empl){
        return empl.id === id;
     })
    return employee;
}
console.log("Test 1", getEmployee(employees, 126));


function getEmployeesBySalary(employees, salaryFrom, salaryTo){
   //TODO
   // returns arrays of Employee object that have salary in [salaryFrom, salaryTo] 
   const arrayEmployees = employees.filter(function(empl){
       return empl.salary >= salaryFrom && empl.salary <= salaryTo;

   })
   return arrayEmployees;
}
console.log("Test 2",getEmployeesBySalary(employees, 13000, 15000));


function getEmployeesByCity(employees,city){
    //TODO
    //returns array of Employee objects from a given city 
   const cityEmployees = employees.filter(function(empl){
    return empl.address.city === city;

   })
  return cityEmployees;
}
console.log("Test 3", getEmployeesByCity(employees,"Lod"));


function getEmployeeNames(employees){
    //TODO 
    // returns array of all Employee names 
     const nameEmployees = employees.map(function(empl){
        return empl.name;
     })
     return nameEmployees;
}
console.log("Test 4",getEmployeeNames(employees));


function sortEmployeesByAge(employees){
    //TODO
    //returns array of Employee objects sorted by age in ascending order
    const ageEmployees = employees.sort(function(empl,empl2){
        return empl2.bithYear - empl.bithYear;
    })
   return ageEmployees;

}
console.log("Test 5", sortEmployeesByAge(employees));


function computeSalaryBudget(employees) {
    //TODO 
    //computes and returns total salary for all Employee objects
  const totalSalary = employees.reduce(function( res, empl ){
    return res += empl.salary;
  }, 0)
    return totalSalary;
}
console.log("Test 6",computeSalaryBudget(employees));
