/* Name: RegExp is subclassable
 * Category: subclassing
 * Significance: tiny
 * Link: http://www.ecma-international.org/ecma-262/6.0/#sec-regexp-constructor
 */

/*
 * Test: basic functionality
 */
function() {
    class R extends RegExp {}
    var r = new R("baz","g");
    return r.global && r.source === "baz";
}

/*
 * Test: correct prototype chain
 */
function() {
    class R extends RegExp {}
    var r = new R("baz","g");
    return r instanceof R && r instanceof RegExp && Object.getPrototypeOf(R) === RegExp;
}

/*
 * Test: RegExp.prototype.exec
 */
function() {
    class R extends RegExp {}
    var r = new R("baz","g");
    return r.exec("foobarbaz")[0] === "baz" && r.lastIndex === 9;
}

/*
 * Test: RegExp.prototype.test
 */
function() {
    class R extends RegExp {}
    var r = new R("baz");
    return r.test("foobarbaz");
}

