#!/bin/bash

process.argv.forEach((val, index, array) => { 
    console.log(`${index}: ${val}`);
});

facc = function( n ) {
    if (n==1) return 1
    return n * facc(n-1)
}

console.log('Die Fakultaet von 4 ist ' + facc(4) )
console.log('Die Fakultaet von 10 ist ' + facc(10) )
console.log('Die Fakultaet von 1 ist ' + facc(1) )
