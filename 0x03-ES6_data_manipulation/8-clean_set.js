export default function cleanset(set1, startstring) {

    let suffixes = [];

    if (set1 instanceof Set &&  typeof startstring === 'string' && startstring)
        {
            set1.forEach(word => {
                if (word.startsWith(startstring)) {
                    let suffix = word.substring(startstring.length)
                    suffixes.push(suffix)
                }
            })
        }
    return suffixes.join('-')
}
