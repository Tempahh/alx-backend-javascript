export default function hasValuesFromArray(set1, arr1) {
    if (set1 instanceof Set && arr1 instanceof Array) 
        return arr1.every(element => set1.has(element))
}
