/* Name: Number properties
 * Category: built-in extensions
 * Significance: small
 * Link: https://people.mozilla.org/~jorendorff/es6-draft.html#sec-isfinite-number
 *//*
 * Test: Number.isFinite
 */
function NumberisFinite() {
    return typeof Number.isFinite === 'function';
}

/*
 * Test: Number.isInteger
 */
function NumberisInteger() {
    return typeof Number.isInteger === 'function';
}

/*
 * Test: Number.isSafeInteger
 */
function NumberisSafeInteger() {
    return typeof Number.isSafeInteger === 'function';
}

/*
 * Test: Number.isNaN
 */
function NumberisNaN() {
    return typeof Number.isNaN === 'function';
}

/*
 * Test: Number.EPSILON
 */
function NumberEPSILON() {
    return typeof Number.EPSILON === 'number';
}

/*
 * Test: Number.MIN_SAFE_INTEGER
 */
function NumberMINSAFEINTEGER() {
    return typeof Number.MIN_SAFE_INTEGER === 'number';
}

/*
 * Test: Number.MAX_SAFE_INTEGER
 */
function NumberMAXSAFEINTEGER() {
    return typeof Number.MAX_SAFE_INTEGER === 'number';
}

