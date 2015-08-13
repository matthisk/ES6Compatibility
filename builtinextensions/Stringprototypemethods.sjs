/* Name: String.prototype methods
 * Category: built-in extensions
 * Significance: medium
 * Link: http://www.ecma-international.org/ecma-262/6.0/#sec-properties-of-the-string-prototype-object
 */

/*
 * Test: String.prototype.codePointAt
 */
function() {
    return typeof String.prototype.codePointAt === 'function';
}

/*
 * Test: String.prototype.normalize
 */
function() {
    return typeof String.prototype.normalize === "function"
      && "c\u0327\u0301".normalize("NFC") === "\u1e09"
      && "\u1e09".normalize("NFD") === "c\u0327\u0301";
}

/*
 * Test: String.prototype.repeat
 */
function() {
    return typeof String.prototype.repeat === 'function'
      && "foo".repeat(3) === "foofoofoo";
}

/*
 * Test: String.prototype.startsWith
 */
function() {
    return typeof String.prototype.startsWith === 'function'
      && "foobar".startsWith("foo");
}

/*
 * Test: String.prototype.endsWith
 */
function() {
    return typeof String.prototype.endsWith === 'function'
      && "foobar".endsWith("bar");
}

/*
 * Test: String.prototype.includes
 */
function() {
    return typeof String.prototype.includes === 'function'
      && "foobar".includes("oba");
}

/*
 * Test: String.prototype[Symbol.iterator]
 */
function() {
    return typeof String.prototype[Symbol.iterator] === 'function';
}

/*
 * Test: String iterator prototype chain
 */
function() {
    // Iterator instance
    var iterator = ''[Symbol.iterator]();
    // %StringIteratorPrototype%
    var proto1 = Object.getPrototypeOf(iterator);
    // %IteratorPrototype%
    var proto2 = Object.getPrototypeOf(proto1);

    return proto2.hasOwnProperty(Symbol.iterator) &&
      !proto1    .hasOwnProperty(Symbol.iterator) &&
      !iterator  .hasOwnProperty(Symbol.iterator) &&
      iterator[Symbol.iterator]() === iterator;
}

