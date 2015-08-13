/* Name: WeakMap
 * Category: built-ins
 * Significance: small
 * Link: http://www.ecma-international.org/ecma-262/6.0/#sec-weakmap-objects
 */

/*
 * Test: basic functionality
 */
function() {
    var key = {};
    var weakmap = new WeakMap();

    weakmap.set(key, 123);

    return weakmap.has(key) && weakmap.get(key) === 123;
}

/*
 * Test: constructor arguments
 */
function() {
    var key1 = {};
    var key2 = {};
    var weakmap = new WeakMap([[key1, 123], [key2, 456]]);

    return weakmap.has(key1) && weakmap.get(key1) === 123 &&
           weakmap.has(key2) && weakmap.get(key2) === 456;
}

/*
 * Test: constructor requires new
 */
function() {
    new WeakMap();
    try {
      WeakMap();
      return false;
    } catch(e) {
      return true;
    }
}

/*
 * Test: constructor accepts null
 */
function() {
    new WeakMap(null);
    return true;
}

/*
 * Test: constructor invokes set
 */
function() {
    var passed = false;
    var _set = WeakMap.prototype.set;

    WeakMap.prototype.set = function(k, v) {
      passed = true;
    };

    new WeakMap([ [{ }, 42] ]);
    WeakMap.prototype.set = _set;

    return passed;
}

/*
 * Test: frozen objects as keys
 */
function() {
    var f = Object.freeze({});
    var m = new WeakMap;
    m.set(f, 42);
    return m.get(f) === 42;
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
      new WeakMap(iter);
    } catch(e){}
    return closed;
}

/*
 * Test: WeakMap.prototype.set returns this
 */
function() {
    var weakmap = new WeakMap();
    var key = {};
    return weakmap.set(key, 0) === weakmap;
}

/*
 * Test: WeakMap.prototype.delete
 */
function() {
    return typeof WeakMap.prototype.delete === "function";
}

/*
 * Test: no WeakMap.prototype.clear method
 */
function() {
    if (!("clear" in WeakMap.prototype)) {
      return true;
    }
    var m = new WeakMap();
    var key = {};
    m.set(key, 2);
    m.clear();
    return m.has(key);
}

