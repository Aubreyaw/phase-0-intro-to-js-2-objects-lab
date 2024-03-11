let employee = {
    name: 'Aubrey',
    streetAddress: '742b Pinebrook rd',
};

function updateEmployeeWithKeyAndValue(original, key, value) {
    return {
        ...original,
        [key]: value,
    };
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee; 
}

function deleteFromEmployeeByKey(original, key) {
    const clonedEmployee = { ...original };
    delete clonedEmployee[key];
    return clonedEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}


let updatedEmployee = updateEmployeeWithKeyAndValue(employee, 'name', 'Sam');
updatedEmployee = updateEmployeeWithKeyAndValue(updatedEmployee, 'streetAddress', '11 Broadway');
console.log(updatedEmployee);

destructivelyUpdateEmployeeWithKeyAndValue(employee, 'name', 'Sam');
destructivelyUpdateEmployeeWithKeyAndValue(employee, 'streetAddress', '11 Broadway');


let employeeWithoutName = deleteFromEmployeeByKey(employee, 'name');
console.log(employeeWithoutName);

