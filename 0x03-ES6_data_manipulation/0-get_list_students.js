export default function getListStudents() {
    const students = [
        {firstname: 'Guillaume', id: 1, location: 'San Fransisco'},
        {firstname: 'James', id: 2, location: 'Colombiaa'},
        {firstname: 'Serena', id: 5, location: 'San Fransisco'}
    ]

//const retarray = students.map(newlist => {
//    return [{
//        id: newlist.id,
//        name: newlist.name,
//        location: newlist.location
//    }]
//})

    return students;
}