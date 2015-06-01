/* Name: WeakMap
 * Category: built-ins
 * Significance: medium
 * Link: http://people.mozilla.org/~jorendorff/es6-draft.html#sec-weakmap-objects
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
 * Test: iterator closing
 */
function() {
    var closed = false;
    var iter = __createIterableObject(1, 2, 3);
    iter['return'] = function(){ closed = true; return {}; }
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
 * Test: Support frozen objects as keys
 */
function() {
    var f = Object.freeze({});
    var m = new WeakMap;
    m.set(f, 42);
    return m.get(f) === 42;
}

