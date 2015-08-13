/* Name: Array static methods
 * Category: built-in extensions
 * Significance: medium
 * Link: http://www.ecma-international.org/ecma-262/6.0/#sec-properties-of-the-array-constructor
 */

/*
 * Test: Array.from, array-like objects
 */
function() {
    return Array.from({ 0: "foo", 1: "bar", length: 2 }) + '' === "foo,bar";
}

/*
 * Test: Array.from, generator instances
 */
function() {
    var iterable = (function*(){ yield 1; yield 2; yield 3; }());
    return Array.from(iterable) + '' === "1,2,3";
}

/*
 * Test: Array.from, generic iterables
 */
function() {
    var iterable = global.__createIterableObject([1, 2, 3]);
    return Array.from(iterable) + '' === "1,2,3";
}

/*
 * Test: Array.from, instances of generic iterables
 */
function() {
    var iterable = global.__createIterableObject([1, 2, 3]);
    return Array.from(Object.create(iterable)) + '' === "1,2,3";
}

/*
 * Test: Array.from map function, array-like objects
 */
function() {
    return Array.from({ 0: "foo", 1: "bar", length: 2 }, function(e, i) {
      return e + this.baz + i;
    }, { baz: "d" }) + '' === "food0,bard1";
}

/*
 * Test: Array.from map function, generator instances
 */
function() {
    var iterable = (function*(){ yield "foo"; yield "bar"; yield "bal"; }());
    return Array.from(iterable, function(e, i) {
      return e + this.baz + i;
    }, { baz: "d" }) + '' === "food0,bard1,bald2";
}

/*
 * Test: Array.from map function, generic iterables
 */
function() {
    var iterable = global.__createIterableObject(["foo", "bar", "bal"]);
    return Array.from(iterable, function(e, i) {
      return e + this.baz + i;
    }, { baz: "d" }) + '' === "food0,bard1,bald2";
}

/*
 * Test: Array.from map function, instances of iterables
 */
function() {
    var iterable = global.__createIterableObject(["foo", "bar", "bal"]);
    return Array.from(Object.create(iterable), function(e, i) {
      return e + this.baz + i;
    }, { baz: "d" }) + '' === "food0,bard1,bald2";
}

/*
 * Test: Array.from, iterator closing
 */
function() {
    var closed = false;
    var iter = global.__createIterableObject([1, 2, 3], {
      'return': function(){ closed = true; return {}; }
    });
    try {
      Array.from(iter, function() { throw 42 });
    } catch(e){}
    return closed;
}

/*
 * Test: Array.of
 */
function() {
    return typeof Array.of === 'function' &&
      Array.of(2)[0] === 2;
}

/*
 * Test: Array[Symbol.species]
 */
function() {
    var prop = Object.getOwnPropertyDescriptor(Array, Symbol.species);
    return 'get' in prop && Array[Symbol.species] === Array;
}

