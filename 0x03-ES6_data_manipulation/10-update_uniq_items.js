export default function updateUniqueItems(map1) {
    if (!(map1 instanceof Map)) {
        throw Error('Cannot process')
    }
    
    const ext_map = new Map(map1)
    
    map1.forEach((score, key) => {
        if (score === 1) {
            map1.set(key, 100)
        }
    })
    return {ext_map, map1}
}