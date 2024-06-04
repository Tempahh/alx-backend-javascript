export default function getStudentsByLocation(studarr, city) {
    return (studarr instanceof Array) ? studarr.filter((student) => student.location === city) : []
}