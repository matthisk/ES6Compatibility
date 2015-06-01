/* Name: Math methods
 * Category: built-in extensions
 * Significance: small
 * Link: https://people.mozilla.org/~jorendorff/es6-draft.html#sec-math
 *//*
 * Test: Math.clz32
 */
function Mathclz32() {
turn typeof Math.clz32 === "function"}

/*
 * Test: Math.imul
 */
function Mathimul() {
turn typeof Math.imul === "function"}

/*
 * Test: Math.sign
 */
function Mathsign() {
turn typeof Math.sign === "function"}

/*
 * Test: Math.log10
 */
function Mathlog10() {
turn typeof Math.log10 === "function"}

/*
 * Test: Math.log2
 */
function Mathlog2() {
turn typeof Math.log2 === "function"}

/*
 * Test: Math.log1p
 */
function Mathlog1p() {
turn typeof Math.log1p === "function"}

/*
 * Test: Math.expm1
 */
function Mathexpm1() {
turn typeof Math.expm1 === "function"}

/*
 * Test: Math.cosh
 */
function Mathcosh() {
turn typeof Math.cosh === "function"}

/*
 * Test: Math.sinh
 */
function Mathsinh() {
turn typeof Math.sinh === "function"}

/*
 * Test: Math.tanh
 */
function Mathtanh() {
turn typeof Math.tanh === "function"}

/*
 * Test: Math.acosh
 */
function Mathacosh() {
turn typeof Math.acosh === "function"}

/*
 * Test: Math.asinh
 */
function Mathasinh() {
turn typeof Math.asinh === "function"}

/*
 * Test: Math.atanh
 */
function Mathatanh() {
turn typeof Math.atanh === "function"}

/*
 * Test: Math.trunc
 */
function Mathtrunc() {
turn typeof Math.trunc === "function"}

/*
 * Test: Math.fround
 */
function Mathfround() {
turn typeof Math.fround === "function"}

/*
 * Test: Math.cbrt
 */
function Mathcbrt() {
turn typeof Math.cbrt === "function"}

/*
 * Test: Math.hypot
 */
function Mathhypot() {
    return Math.hypot() === 0 &&
      Math.hypot(1) === 1 &&
      Math.hypot(9, 12, 20) === 25 &&
      Math.hypot(27, 36, 60, 100) === 125;
}

from,iteratorclosing() {
    var closed = false;
    var iter = __createIterableObject(1, 2, 3);
    iter['return'] = function(){ closed = true; return {}; }
    try {
      Array.from(iter, function() { throw 42 });
    } catch(e){}
    return closed;
}

/*
 * Test: Array.of
 */
function Arrayof() {
    return typeof Array.of === 'function' &&
      Array.of(2)[0] === 2;
}

{} };
    return foo.name === "foo" &&
      typeof bar.name === "function";
}

/*
 * Test: class expressions
 */
function classexpressions() {
    return class foo {}.name === "foo" &&
      typeof class bar { static name() {} }.name === "function";
}

/*
 * Test: variables (class)
 */
function variables() {
    var foo = class {};
    var bar = class baz {};
    var qux = class { static name() {} };
    return foo.name === "foo" &&
           bar.name === "baz" &&
           typeof qux.name === "function";
}

/*
 * Test: object methods (class)
 */
function objectmethods() {
    var o = { foo: class {}, bar: class baz {}};
    o.qux = class {};
    return o.foo.name === "foo" &&
           o.bar.name === "baz" &&
           o.qux.name === "";
}

/*
 * Test: class prototype methods
 */
function classprototypemethods() {
    class C { foo(){} };
    return (new C).foo.name === "foo";
}

/*
 * Test: class static methods
 */
function classstaticmethods() {
    class C { static foo(){} };
    return C.foo.name === "foo";
}

/*
 * Test: isn't writable, is configurable
 */
function isntwritable,isconfigurable() {
    var descriptor = Object.getOwnPropertyDescriptor(function f(){},"name");
    return descriptor.enumerable   === false &&
           descriptor.writable     === false &&
           descriptor.configurable === true;
}

