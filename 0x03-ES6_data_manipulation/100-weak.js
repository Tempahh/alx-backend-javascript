export const weakmap = new WeakMap()

export function queryAPI(endpoint) {
    let count = weakmap.get(endpoint) || 0

    if (count >= 5)
        throw new Error('Endpoint load is high!')
    
    weakmap.set(endpoint, count + 1)
}
