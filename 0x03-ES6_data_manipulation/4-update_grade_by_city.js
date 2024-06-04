export default function updateStudentGradeByCity(studarr, city, newGrades) {
    if (!(studarr instanceof Array) || typeof city !== 'string' || !(newGrades instanceof Array)) {
        return [];
    }

    return studarr
        .filter(student => student.location === city)
        .map(student => {
            const gradeObj = newGrades.find(grade => grade.studentId === student.id);
            return {
                ...student,
                grade: gradeObj ? gradeObj.grade : 'N/A'
            };
        });
}
