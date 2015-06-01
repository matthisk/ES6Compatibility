/* Name: String static methods
 * Category: built-in extensions
 * Significance: medium
 * Link: http://people.mozilla.org/~jorendorff/es6-draft.html#sec-properties-of-the-string-constructor
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

