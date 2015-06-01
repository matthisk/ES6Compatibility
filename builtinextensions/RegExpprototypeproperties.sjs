/* Name: RegExp.prototype properties
 * Category: built-in extensions
 * Significance: small
 * Link: http://people.mozilla.org/~jorendorff/es6-draft.html#sec-regexp.prototype
 *//*
 * Test: RegExp.prototype.flags
 */
function RegExpprototypeflags() {
    return /./igm.flags === "gim" && /./.flags === "";
}

/*
 * Test: RegExp.prototype[Symbol.match]
 */
function RegExpprototype[Symbolmatch]() {
    return typeof RegExp.prototype[Symbol.match] === 'function';
}

/*
 * Test: RegExp.prototype[Symbol.replace]
 */
function RegExpprototype[Symbolreplace]() {
    return typeof RegExp.prototype[Symbol.replace] === 'function';
}

/*
 * Test: RegExp.prototype[Symbol.split]
 */
function RegExpprototype[Symbolsplit]() {
    return typeof RegExp.prototype[Symbol.split] === 'function';
}

/*
 * Test: RegExp.prototype[Symbol.search]
 */
function RegExpprototype[Symbolsearch]() {
    return typeof RegExp.prototype[Symbol.search] === 'function';
}

