/* @flow */
/* eslint-disable no-unused-vars */

let someFlag: boolean;
let greatTotal: number;
let firstName: string;

function toString(x: number): string {
    return String(x);
}

/**
 *Ad two numbers
 *
 * @param {(number | string)} x
 * @param {(number | string)} y
 * @returns
 */
function addTwo(x: number | string, y: number | string) {
    return x + y;
}

function showValue(z: mixed): void {
    //not returning any type
    // eslint-disable-next-line no-console
    console.log("Showing...", z);
}

let anotherList: number[] = [12, 4, 56];

let sealedObject: { name: string, age?: number } = { name: "" };
sealedObject.name = "Juan Pablo Tixe A.";
sealedObject.id = 229; //error: key isn't defined in the data type
sealedObject = { age: 57 }; //error: mandatory "name" field is missing

let unsealedObject = {};
unsealedObject.id = 230; //OK
