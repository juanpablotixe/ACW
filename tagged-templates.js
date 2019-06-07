"use strict";

/* @flow */

function showAge(strings, name, year) {
    const currYear = new Date().getFullYear();
    const yearsAgo = currYear - year;
    return (
        strings[0] + name + strings[1] + year + `, ${yearsAgo} years ago`
    );
}

const who = "Prince Valiant";
const when = 1937;
const output1 = showAge`The ${who} character was created in ${when}`;

// eslint-disable-next-line no-console
console.log(output1);
//The Prince Valiant character was created in 1937, 81 years ago

const model = "Suzuki";
const yearBought = 2009;
const output2 = showAge`My ${model} car was bought in ${yearBought}`;

// eslint-disable-next-line no-console
console.log(output2);
//My Suzuki car was bought in 2009, 9 years ago

"hello".repeat(3);
"hello".padStart(12);

function minAndMax(...nums) {
    return [Math.min(...nums), Math.max(...nums)];
}
// eslint-disable-next-line no-unused-vars
let [small, big] = minAndMax(22, 9, 60, 12, 4, 56);
// eslint-disable-next-line no-console
console.log(small, big);

// eslint-disable-next-line no-unused-vars
var empty_object = {};

var stooge = {
    name: "Juan Pablo",
    lasName: "Tixe"
};

// eslint-disable-next-line no-console
console.log(stooge["name"]);

var add = function(a, b) {
    return a + b;
};
