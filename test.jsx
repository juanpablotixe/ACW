/* @flow */

function foo(x: ?number): string {
    if (x) {
        return x;
    } else {
        return "some string";
    }
}
// eslint-disable-next-line no-console
console.log(foo("x"));
