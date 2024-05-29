export default function concatArrays(array1, array2, string) {
    return [...array1, ...array2, string];
}
// The spread operator (...) allows an iterable to expand in places where 0+ arguments are expected. It is mostly used in the variable array where there is more than 1 values are expected. It is used to split up array elements or object properties. It is used to copy the array or object. It is used to concatenate arrays or objects. It is used to pass the array or object as arguments to a function