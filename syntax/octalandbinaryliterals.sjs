/* Name: octal and binary literals
 * Category: syntax
 * Significance: small
 * Link: http://www.ecma-international.org/ecma-262/6.0/#sec-literals-numeric-literals
 */

/*
 * Test: octal literals
 */
function() {
    return 0o10 === 8 && 0O10 === 8;
}

/*
 * Test: binary literals
 */
function() {
    return 0b10 === 2 && 0B10 === 2;
}

/*
 * Test: octal supported by Number()
 */
function() {
    return Number('0o1') === 1;
}

/*
 * Test: binary supported by Number()
 */
function() {
    return Number('0b1') === 1;
}

