/* Name: Object static methods
 * Category: built-in extensions
 * Significance: medium
 * Link: http://www.ecma-international.org/ecma-262/6.0/#sec-properties-of-the-object-constructor
 */

/*
 * Test: Object.assign
 */
function() {
    var o = Object.assign({a:true}, {b:true}, {c:true});
    return "a" in o && "b" in o && "c" in o;
}

/*
 * Test: Object.is
 */
function() {
    return typeof Object.is === 'function' &&
      Object.is(NaN, NaN) &&
     !Object.is(-0, 0);
}

/*
 * Test: Object.getOwnPropertySymbols
 */
function() {
    var o = {};
    var sym = Symbol(), sym2 = Symbol(), sym3 = Symbol();
    o[sym]  = true;
    o[sym2] = true;
    o[sym3] = true;
    var result = Object.getOwnPropertySymbols(o);
    return result[0] === sym
      && result[1] === sym2
      && result[2] === sym3;
}

/*
 * Test: Object.setPrototypeOf
 */
function() {
    return Object.setPrototypeOf({}, Array.prototype) instanceof Array;
}

