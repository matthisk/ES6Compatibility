/* Name: RegExp.prototype properties
 * Category: built-in extensions
 * Significance: small
 * Link: http://www.ecma-international.org/ecma-262/6.0/#sec-regexp.prototype
 */

/*
 * Test: RegExp.prototype.flags
 */
function() {
    return /./igm.flags === "gim" && /./.flags === "";
}

/*
 * Test: RegExp.prototype[Symbol.match]
 */
function() {
    return typeof RegExp.prototype[Symbol.match] === 'function';
}

/*
 * Test: RegExp.prototype[Symbol.replace]
 */
function() {
    return typeof RegExp.prototype[Symbol.replace] === 'function';
}

/*
 * Test: RegExp.prototype[Symbol.split]
 */
function() {
    return typeof RegExp.prototype[Symbol.split] === 'function';
}

/*
 * Test: RegExp.prototype[Symbol.search]
 */
function() {
    return typeof RegExp.prototype[Symbol.search] === 'function';
}

/*
 * Test: RegExp[Symbol.species]
 */
function() {
    var prop = Object.getOwnPropertyDescriptor(RegExp, Symbol.species);
    return 'get' in prop && RegExp[Symbol.species] === RegExp;
}

