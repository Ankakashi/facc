#!/bin/bash

function facc(n) {
    if (n==1) return 1;
    return n * facc(n-1);
}

// the first two elements of argv are
// - the path to node
// - the path to this file
// So we only care about the third (index 2)
var input = process.argv[2];
console.log(facc(input));
