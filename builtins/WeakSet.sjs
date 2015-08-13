/* Name: WeakSet
 * Category: built-ins
 * Significance: small
 * Link: http://www.ecma-international.org/ecma-262/6.0/#sec-weakset-objects
 */

/*
 * Test: basic functionality
 */
function() {
    var obj1 = {};
    var weakset = new WeakSet();

    weakset.add(obj1);
    weakset.add(obj1);

    return weakset.has(obj1);
}

/*
 * Test: constructor arguments
 */
function() {
    var obj1 = {}, obj2 = {};
    var weakset = new WeakSet([obj1, obj2]);

    return weakset.has(obj1) && weakset.has(obj2);
}

/*
 * Test: constructor requires new
 */
function() {
    new WeakSet();
    try {
      WeakSet();
      return false;
    } catch(e) {
      return true;
    }
}

/*
 * Test: constructor accepts null
 */
function() {
    new WeakSet(null);
    return true;
}

/*
 * Test: constructor invokes add
 */
function() {
    var passed = false;
    var _add = WeakSet.prototype.add;

    WeakSet.prototype.add = function(v) {
      passed = true;
    };

    new WeakSet([ { } ]);
    WeakSet.prototype.add = _add;

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
      new WeakSet(iter);
    } catch(e){}
    return closed;
}

/*
 * Test: WeakSet.prototype.add returns this
 */
function() {
    var weakset = new WeakSet();
    var obj = {};
    return weakset.add(obj) === weakset;
}

/*
 * Test: WeakSet.prototype.delete
 */
function() {
    return typeof WeakSet.prototype.delete === "function";
}

/*
 * Test: no WeakSet.prototype.clear method
 */
function() {
    if (!("clear" in WeakSet.prototype)) {
      return true;
    }
    var s = new WeakSet();
    var key = {};
    s.add(key);
    s.clear();
    return s.has(key);
}

