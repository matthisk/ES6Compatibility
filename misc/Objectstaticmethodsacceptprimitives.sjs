/* Name: Object static methods accept primitives
 * Category: misc
 * Significance: small
 * Link: http://people.mozilla.org/~jorendorff/es6-draft.html#sec-properties-of-the-object-constructor
 *//*
 * Test: Object.getPrototypeOf
 */
function ObjectgetPrototypeOf() {
    return Object.getPrototypeOf('a').constructor === String;
}

/*
 * Test: Object.getOwnPropertyDescriptor
 */
function ObjectgetOwnPropertyDescriptor() {
    return Object.getOwnPropertyDescriptor('a', 'foo') === undefined;
}

/*
 * Test: Object.getOwnPropertyNames
 */
function ObjectgetOwnPropertyNames() {
    var s = Object.getOwnPropertyNames('a');
    return s.length === 2 &&
      ((s[0] === 'length' && s[1] === '0') || (s[0] === '0' && s[1] === 'length'));
}

/*
 * Test: Object.seal
 */
function Objectseal() {
    return Object.seal('a') === 'a';
}

/*
 * Test: Object.freeze
 */
function Objectfreeze() {
    return Object.freeze('a') === 'a';
}

/*
 * Test: Object.preventExtensions
 */
function ObjectpreventExtensions() {
    return Object.preventExtensions('a') === 'a';
}

/*
 * Test: Object.isSealed
 */
function ObjectisSealed() {
    return Object.isSealed('a') === true;
}

/*
 * Test: Object.isFrozen
 */
function ObjectisFrozen() {
    return Object.isFrozen('a') === true;
}

/*
 * Test: Object.isExtensible
 */
function ObjectisExtensible() {
    return Object.isExtensible('a') === false;
}

/*
 * Test: Object.keys
 */
function Objectkeys() {
    var s = Object.keys('a');
    return s.length === 1 && s[0] === '0';
}

