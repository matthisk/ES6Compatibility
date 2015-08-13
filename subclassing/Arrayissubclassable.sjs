/* Name: Array is subclassable
 * Category: subclassing
 * Significance: small
 * Link: http://www.ecma-international.org/ecma-262/6.0/#sec-array-constructor
 */

/*
 * Test: length property (accessing)
 */
function() {
    class C extends Array {}
    var c = new C();
    var len1 = c.length;
    c[2] = 'foo';
    var len2 = c.length;
    return len1 === 0 && len2 === 3;
}

/*
 * Test: length property (setting)
 */
function() {
    class C extends Array {}
    var c = new C();
    c[2] = 'foo';
    c.length = 1;
    return c.length === 1 && !(2 in c);
}

/*
 * Test: correct prototype chain
 */
function() {
    class C extends Array {}
    var c = new C();
    return c instanceof C && c instanceof Array && Object.getPrototypeOf(C) === Array;
}

/*
 * Test: Array.isArray support
 */
function() {
    class C extends Array {}
    return Array.isArray(new C());
}

/*
 * Test: Array.prototype.concat
 */
function() {
    class C extends Array {}
    var c = new C();
    return c.concat(1) instanceof C;
}

/*
 * Test: Array.prototype.filter
 */
function() {
    class C extends Array {}
    var c = new C();
    return c.filter(Boolean) instanceof C;
}

/*
 * Test: Array.prototype.map
 */
function() {
    class C extends Array {}
    var c = new C();
    return c.map(Boolean) instanceof C;
}

/*
 * Test: Array.prototype.slice
 */
function() {
    class C extends Array {}
    var c = new C();
    c.push(2,4,6);
    return c.slice(1,2) instanceof C;
}

/*
 * Test: Array.prototype.splice
 */
function() {
    class C extends Array {}
    var c = new C();
    c.push(2,4,6);
    return c.splice(1,2) instanceof C;
}

/*
 * Test: Array.from
 */
function() {
    class C extends Array {}
    return C.from({ length: 0 }) instanceof C;
}

/*
 * Test: Array.of
 */
function() {
    class C extends Array {}
    return C.of(0) instanceof C;
}

