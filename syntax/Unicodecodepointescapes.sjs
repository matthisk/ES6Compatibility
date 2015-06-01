/* Name: Unicode code point escapes
 * Category: syntax
 * Significance: small
 * Link: https://people.mozilla.org/~jorendorff/es6-draft.html#sec-literals-string-literals
 */

/*
 * Test: in strings
 */
function() {
    return '\u{1d306}' == '\ud834\udf06';
}

/*
 * Test: in identifiers
 */
function() {
    var \u{102C0} = { \u{102C0} : 2 };
    return \u{102C0}['\ud800\udec0'] === 2;
}

