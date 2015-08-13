/* Name: Map
 * Category: built-ins
 * Significance: small
 * Link: http://www.ecma-international.org/ecma-262/6.0/#sec-map-objects
 */

/*
 * Test: basic functionality
 */
function() {
    var key = {};
    var map = new Map();

    map.set(key, 123);

    return map.has(key) && map.get(key) === 123;
}

/*
 * Test: constructor arguments
 */
function() {
    var key1 = {};
    var key2 = {};
    var map = new Map([[key1, 123], [key2, 456]]);

    return map.has(key1) && map.get(key1) === 123 &&
           map.has(key2) && map.get(key2) === 456;
}

/*
 * Test: constructor requires new
 */
function() {
    new Map();
    try {
      Map();
      return false;
    } catch(e) {
      return true;
    }
}

/*
 * Test: constructor accepts null
 */
function() {
    new Map(null);
    return true;
}

/*
 * Test: constructor invokes set
 */
function() {
    var passed = false;
    var _set = Map.prototype.set;

    Map.prototype.set = function(k, v) {
      passed = true;
    };

    new Map([ [1, 2] ]);
    Map.prototype.set = _set;

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
    try {
      new Map(iter);
    } catch(e){}
    return closed;
}

/*
 * Test: Map.prototype.set returns this
 */
function() {
    var map = new Map();
    return map.set(0, 0) === map;
}

/*
 * Test: -0 key converts to +0
 */
function() {
    var map = new Map();
    map.set(-0, "foo");
    var k;
    map.forEach(function (value, key) {
      k = 1 / key;
    });
    return k === Infinity && map.get(+0) == "foo";
}

/*
 * Test: Map.prototype.size
 */
function() {
    var key = {};
    var map = new Map();

    map.set(key, 123);

    return map.size === 1;
}

/*
 * Test: Map.prototype.delete
 */
function() {
    return typeof Map.prototype.delete === "function";
}

/*
 * Test: Map.prototype.clear
 */
function() {
    return typeof Map.prototype.clear === "function";
}

/*
 * Test: Map.prototype.forEach
 */
function() {
    return typeof Map.prototype.forEach === "function";
}

/*
 * Test: Map.prototype.keys
 */
function() {
    return typeof Map.prototype.keys === "function";
}

/*
 * Test: Map.prototype.values
 */
function() {
    return typeof Map.prototype.values === "function";
}

/*
 * Test: Map.prototype.entries
 */
function() {
    return typeof Map.prototype.entries === "function";
}

/*
 * Test: Map.prototype[Symbol.iterator]
 */
function() {
    return typeof Map.prototype[Symbol.iterator] === "function";
}

/*
 * Test: Map iterator prototype chain
 */
function() {
    // Iterator instance
    var iterator = new Map()[Symbol.iterator]();
    // %MapIteratorPrototype%
    var proto1 = Object.getPrototypeOf(iterator);
    // %IteratorPrototype%
    var proto2 = Object.getPrototypeOf(proto1);

    return proto2.hasOwnProperty(Symbol.iterator) &&
      !proto1    .hasOwnProperty(Symbol.iterator) &&
      !iterator  .hasOwnProperty(Symbol.iterator) &&
      iterator[Symbol.iterator]() === iterator;
}

/*
 * Test: Map[Symbol.species]
 */
function() {
    var prop = Object.getOwnPropertyDescriptor(Map, Symbol.species);
    return 'get' in prop && Map[Symbol.species] === Map;
}

