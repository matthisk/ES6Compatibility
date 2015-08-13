/* Name: RegExp syntax extensions
 * Category: annex b
 * Significance: tiny
 * Link: http://www.ecma-international.org/ecma-262/6.0/#sec-regular-expressions-patterns
 */

/*
 * Test: hyphens in character sets
 */
function() {
    return /[\w-_]/.exec("-")[0] === "-";
}

/*
 * Test: invalid character escapes
 */
function() {
    return /\z/.exec("\\z")[0] === "z"
      && /[\z]/.exec("[\\z]")[0] === "z";
}

/*
 * Test: invalid control-character escapes
 */
function() {
    return /\c2/.exec("\\c2")[0] === "\\c2";
}

/*
 * Test: invalid unicode escapes
 */
function() {
    return /\u1/.exec("u1")[0] === "u1"
      && /[\u1]/.exec("u")[0] === "u";
}

/*
 * Test: invalid hexadecimal escapes
 */
function() {
    return /\x1/.exec("x1")[0] === "x1"
      && /[\x1]/.exec("x")[0] === "x";
}

/*
 * Test: incomplete patterns and quantifiers
 */
function() {
    return /x{1/.exec("x{1")[0] === "x{1"
      && /x]1/.exec("x]1")[0] === "x]1";
}

/*
 * Test: octal escape sequences
 */
function() {
    return /\041/.exec("!")[0] === "!"
      && /[\041]/.exec("!")[0] === "!";
}

/*
 * Test: invalid backreferences become octal escapes
 */
function() {
    return /\41/.exec("!")[0] === "!"
      && /[\41]/.exec("!")[0] === "!";
}

