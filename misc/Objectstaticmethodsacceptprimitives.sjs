/* Name: Object static methods accept primitives
 * Category: misc
 * Significance: tiny
 * Link: http://www.ecma-international.org/ecma-262/6.0/#sec-properties-of-the-object-constructor
 */

/*
 * Test: Object.getPrototypeOf
 */
function() {
    return Object.getPrototypeOf('a').constructor === String;
}

/*
 * Test: Object.getOwnPropertyDescriptor
 */
function() {
    return Object.getOwnPropertyDescriptor('a', 'foo') === undefined;
}

/*
 * Test: Object.getOwnPropertyNames
 */
function() {
    var s = Object.getOwnPropertyNames('a');
    return s.length === 2 &&
      ((s[0] === 'length' && s[1] === '0') || (s[0] === '0' && s[1] === 'length'));
}

/*
 * Test: Object.seal
 */
function() {
    return Object.seal('a') === 'a';
}

/*
 * Test: Object.freeze
 */
function() {
    return Object.freeze('a') === 'a';
}

/*
 * Test: Object.preventExtensions
 */
function() {
    return Object.preventExtensions('a') === 'a';
}

/*
 * Test: Object.isSealed
 */
function() {
    return Object.isSealed('a') === true;
}

/*
 * Test: Object.isFrozen
 */
function() {
    return Object.isFrozen('a') === true;
}

/*
 * Test: Object.isExtensible
 */
function() {
    return Object.isExtensible('a') === false;
}

/*
 * Test: Object.keys
 */
function() {
    var s = Object.keys('a');
    return s.length === 1 && s[0] === '0';
}

