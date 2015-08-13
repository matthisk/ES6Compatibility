/* Name: Set
 * Category: built-ins
 * Significance: small
 * Link: http://www.ecma-international.org/ecma-262/6.0/#sec-set-objects
 */

/*
 * Test: basic functionality
 */
function() {
    var obj = {};
    var set = new Set();

    set.add(123);
    set.add(123);

    return set.has(123);
}

/*
 * Test: constructor arguments
 */
function() {
    var obj1 = {};
    var obj2 = {};
    var set = new Set([obj1, obj2]);

    return set.has(obj1) && set.has(obj2);
}

/*
 * Test: constructor requires new
 */
function() {
    new Set();
    try {
      Set();
      return false;
    } catch(e) {
      return true;
    }
}

/*
 * Test: constructor accepts null
 */
function() {
    new Set(null);
    return true;
}

/*
 * Test: constructor invokes add
 */
function() {
    var passed = false;
    var _add = Set.prototype.add;

    Set.prototype.add = function(v) {
      passed = true;
    };

    new Set([1]);
    Set.prototype.add = _add;

    return passed;
}

/*
 * Test: iterator closing
 */
function() {
    var closed = false;
    var iter = global.__createIterableObject([1, 2, 3], {
      'return': function(){ closed = true; return {}; }
    });
    var add = Set.prototype.add;
    Set.prototype.add = function(){ throw 0 };
    try {
      new Set(iter);
    } catch(e){}
    Set.prototype.add = add;
    return closed;
}

/*
 * Test: Set.prototype.add returns this
 */
function() {
    var set = new Set();
    return set.add(0) === set;
}

/*
 * Test: -0 key converts to +0
 */
function() {
    var set = new Set();
    set.add(-0);
    var k;
    set.forEach(function (value) {
      k = 1 / value;
    });
    return k === Infinity && set.has(+0);
}

/*
 * Test: Set.prototype.size
 */
function() {
    var obj = {};
    var set = new Set();

    set.add(123);
    set.add(123);
    set.add(456);

    return set.size === 2;
}

/*
 * Test: Set.prototype.delete
 */
function() {
    return typeof Set.prototype.delete === "function";
}

/*
 * Test: Set.prototype.clear
 */
function() {
    return typeof Set.prototype.clear === "function";
}

/*
 * Test: Set.prototype.forEach
 */
function() {
    return typeof Set.prototype.forEach === "function";
}

/*
 * Test: Set.prototype.keys
 */
function() {
    return typeof Set.prototype.keys === "function";
}

/*
 * Test: Set.prototype.values
 */
function() {
    return typeof Set.prototype.values === "function";
}

/*
 * Test: Set.prototype.entries
 */
function() {
    return typeof Set.prototype.entries === "function";
}

/*
 * Test: Set.prototype[Symbol.iterator]
 */
function() {
    return typeof Set.prototype[Symbol.iterator] === "function";
}

/*
 * Test: Set iterator prototype chain
 */
function() {
    // Iterator instance
    var iterator = new Set()[Symbol.iterator]();
    // %SetIteratorPrototype%
    var proto1 = Object.getPrototypeOf(iterator);
    // %IteratorPrototype%
    var proto2 = Object.getPrototypeOf(proto1);

    return proto2.hasOwnProperty(Symbol.iterator) &&
      !proto1    .hasOwnProperty(Symbol.iterator) &&
      !iterator  .hasOwnProperty(Symbol.iterator) &&
      iterator[Symbol.iterator]() === iterator;
}

/*
 * Test: Set[Symbol.species]
 */
function() {
    var prop = Object.getOwnPropertyDescriptor(Set, Symbol.species);
    return 'get' in prop && Set[Symbol.species] === Set;
}

