/* Name: Number properties
 * Category: built-in extensions
 * Significance: small
 * Link: http://www.ecma-international.org/ecma-262/6.0/#sec-isfinite-number
 */

/*
 * Test: Number.isFinite
 */
function() {
    return typeof Number.isFinite === 'function';
}

/*
 * Test: Number.isInteger
 */
function() {
    return typeof Number.isInteger === 'function';
}

/*
 * Test: Number.isSafeInteger
 */
function() {
    return typeof Number.isSafeInteger === 'function';
}

/*
 * Test: Number.isNaN
 */
function() {
    return typeof Number.isNaN === 'function';
}

/*
 * Test: Number.EPSILON
 */
function() {
    return typeof Number.EPSILON === 'number';
}

/*
 * Test: Number.MIN_SAFE_INTEGER
 */
function() {
    return typeof Number.MIN_SAFE_INTEGER === 'number';
}

/*
 * Test: Number.MAX_SAFE_INTEGER
 */
function() {
    return typeof Number.MAX_SAFE_INTEGER === 'number';
}

