import getListStudents from "./0-get_list_students.js";


export default function getListStudentIds(studarr) {
    return (studarr instanceof Array) ? studarr.map(student => student.id) : [];
    
}
