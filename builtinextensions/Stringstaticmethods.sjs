/* Name: String static methods
 * Category: built-in extensions
 * Significance: medium
 * Link: http://www.ecma-international.org/ecma-262/6.0/#sec-properties-of-the-string-constructor
 */

/*
 * Test: String.raw
 */
function() {
    return typeof String.raw === 'function';
}

/*
 * Test: String.fromCodePoint
 */
function() {
    return typeof String.fromCodePoint === 'function';
}

