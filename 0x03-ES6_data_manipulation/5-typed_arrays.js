export default function createInt8TypedArray(length, position, value) {
    if (typeof position !== 'number' || typeof length !==  'number' || typeof value !== 'number'){
        throw Error('Arg type err!')
    }
    let arr = new Int8Array(length)
    for (let i = 0; i < length; i++){
        arr[i] = i
    }
    arr[position] = value;

    return arr
}
