//import { getEmployee } from './11-getEmployee';

export default function createReportObject (employeesList) {
    return { allEmployees: {...employeesList},
    getNumberOfDepartments(employeesList) {
        return Object.keys(employeesList).length;
        }
    }
}