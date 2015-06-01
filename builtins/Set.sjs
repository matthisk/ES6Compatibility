/* Name: Set
 * Category: built-ins
 * Significance: medium
 * Link: http://people.mozilla.org/~jorendorff/es6-draft.html#sec-set-objects
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
 * Test: iterator closing
 */
function() {
    var closed = false;
    var iter = __createIterableObject(1, 2, 3);
    iter['return'] = function(){ closed = true; return {}; }
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

