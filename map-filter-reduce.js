/* @flow */

/*
const someArray = [22, 9, 60, 12, 4, 56];

// eslint-disable-next-line no-unused-vars
const totalSum = someArray.reduce(
    (acc: number, val: number) => acc + val,
    0
);
*/

type person = { name: string, sex: string, age: number };

const family: Array<person> = [
    { name: "Juan", sex: "M", age: 7 },
    { name: "Mayri", sex: "F", age: 8 }
];

const ages = family.map(x => x.age);

// eslint-disable-next-line no-console
console.log(ages);
