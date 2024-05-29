#!/usr/bin/node

export default function appendToEachArrayValue(array, appendString) {
    const updatedarray = [];
    
    for (const i of array) {
        const value = i;
        updatedarray.push( appendString + value);
    }
    return array;
}