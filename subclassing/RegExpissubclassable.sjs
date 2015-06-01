/* Name: RegExp is subclassable
 * Category: subclassing
 * Significance: small
 * Link: https://people.mozilla.org/~jorendorff/es6-draft.html#sec-regexp-constructor
 *//*
 * Test: basic functionality
 */
function basicfunctionality() {
    class R extends RegExp {}
    var r = new R("baz","g");
    return r.global && r.source === "baz";
}

/*
 * Test: RegExp.prototype.exec
 */
function RegExpprototypeexec() {
    class R extends RegExp {}
    var r = new R("baz","g");
    return r.exec("foobarbaz")[0] === "baz" && r.lastIndex === 9;
}

/*
 * Test: RegExp.prototype.test
 */
function RegExpprototypetest() {
    class R extends RegExp {}
    var r = new R("baz");
    return r.test("foobarbaz");
}

