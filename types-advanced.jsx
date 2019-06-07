/* @flow */

// eslint-disable-next-line no-unused-vars
let flag: number | boolean;
flag = true;
flag = 1;
flag = "1";

// eslint-disable-next-line no-unused-vars
let traffic: "red" | "amber" | "green";
traffic = "yellow";

type numberOrString = number | string;

function addTwo(x: numberOrString, y: numberOrString) {
    return x + y;
}

class Person {
    first: string;
    last: string;

    constructor(first: string, last: string) {
        this.first = first;
        this.last = last;
    }

    initials(): string {
        return `${this.last[0]} ${this.first[0]}`;
    }

    get lastFirst(): string {
        return this.lastFirst;
    }
}

let numberList: Array<number>;
numberList[0] = "JPT";

// eslint-disable-next-line no-unused-vars
let p = new Person("Juan P", "Tixe");

// eslint-disable-next-line no-unused-vars
let pp: Person;
