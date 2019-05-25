module.exports = {
    env: {
        browser: true,
        es6: true,
        node: true
    },
    parser: "babel-eslint",
    extends: ["eslint:recommended", "plugin:flowtype/recommended"],
    globals: {
        Atomics: "readonly",
        SharedArrayBuffer: "readonly"
    },
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 2017,
        sourceType: "module"
    },
    eslintIgnore: [],
    plugins: ["react", "flowtype"],
    rules: {}
};
