/* Name: WeakSet
 * Category: built-ins
 * Significance: medium
 * Link: https://people.mozilla.org/~jorendorff/es6-draft.html#sec-weakset-objects
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
 * Test: iterator closing
 */
function() {
    var closed = false;
    var iter = __createIterableObject(1, 2, 3);
    iter['return'] = function(){ closed = true; return {}; }
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

