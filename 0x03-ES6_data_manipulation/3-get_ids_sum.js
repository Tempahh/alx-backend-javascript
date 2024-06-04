export default function getStudentIdsSum(studarr) {
    const initval = 0
    return studarr instanceof Array ? 
    studarr.reduce((total, currentvalue) => 
        total + currentvalue.id, initval) : initval;
}
