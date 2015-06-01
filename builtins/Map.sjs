/* Name: Map
 * Category: built-ins
 * Significance: medium
 * Link: https://people.mozilla.org/~jorendorff/es6-draft.html#sec-map-objects
 *//*
 * Test: basic functionality
 */
function basicfunctionality() {
    var key = {};
    var map = new Map();

    map.set(key, 123);

    return map.has(key) && map.get(key) === 123;
}

/*
 * Test: constructor arguments
 */
function constructorarguments() {
    var key1 = {};
    var key2 = {};
    var map = new Map([[key1, 123], [key2, 456]]);

    return map.has(key1) && map.get(key1) === 123 &&
           map.has(key2) && map.get(key2) === 456;
}

/*
 * Test: iterator closing
 */
function iteratorclosing() {
    var closed = false;
    var iter = __createIterableObject(1, 2, 3);
    iter['return'] = function(){ closed = true; return {}; }
    try {
      new Map(iter);
    } catch(e){}
    return closed;
}

/*
 * Test: Map.prototype.set returns this
 */
function Mapprototypesetreturnsthis() {
    var map = new Map();
    return map.set(0, 0) === map;
}

/*
 * Test: -0 key converts to +0
 */
function 0keyconvertsto0() {
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
function Mapprototypesize() {
    var key = {};
    var map = new Map();

    map.set(key, 123);

    return map.size === 1;
}

/*
 * Test: Map.prototype.delete
 */
function Mapprototypedelete() {
    return typeof Map.prototype.delete === "function";
}

/*
 * Test: Map.prototype.clear
 */
function Mapprototypeclear() {
    return typeof Map.prototype.clear === "function";
}

/*
 * Test: Map.prototype.forEach
 */
function MapprototypeforEach() {
    return typeof Map.prototype.forEach === "function";
}

/*
 * Test: Map.prototype.keys
 */
function Mapprototypekeys() {
    return typeof Map.prototype.keys === "function";
}

/*
 * Test: Map.prototype.values
 */
function Mapprototypevalues() {
    return typeof Map.prototype.values === "function";
}

/*
 * Test: Map.prototype.entries
 */
function Mapprototypeentries() {
    return typeof Map.prototype.entries === "function";
}

