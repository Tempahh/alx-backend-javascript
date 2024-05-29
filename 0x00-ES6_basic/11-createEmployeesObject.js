export default function createEmployeesObject(departmentName, employees) {
    const employeesList = {};
    return employeesList = {
        [departmentName]: employees
        //employees without brackets to avoid returning a nested array
   }
}
