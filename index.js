// Write your solution in this file!
// declaring the object:
const employee = {
    name: "Cansu Aysagdic",
    streetAddress: "4 Temmuz Mahallesi"

};

// non-destructive update

function updateEmployeeWithKeyandValue(employee, key, value) {
   
    return { ...employee, [key]: value, 
    };
}


// destructive update 

 function destructivelyUpdateEmployeeWithKeyandValue(employee, key, value)
 {
    employee[key] = value;
    return employee;
 }

 // non-destructive function
 function deleteFromEmployeeByKey(employee, key) {
    
    const newEmployee = {...employee};
    delete newEmployee[key];
    return newEmployee;

 }

//destructive function

 function destructivelyDeleteFromEmployeeByKey(employee,key) {
    delete employee[key];
    return employee;
 }
 
 // updates
 
const updatedEmployee = updateEmployeeWithKeyandValue(employee, "position", "Manager");
const copiedEmployee  = {...employee,position: "Manager" }
const destructivelyupdatedEmployee = destructivelyUpdateEmployeeWithKeyandValue(employee, "position", "Manager");