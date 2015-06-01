/* Name: Array is subclassable
 * Category: subclassing
 * Significance: medium
 * Link: https://people.mozilla.org/~jorendorff/es6-draft.html#sec-array-constructor
 *//*
 * Test: basic functionality
 */
function basicfunctionality() {
    class C extends Array {}
    var c = new C();
    var len1 = c.length;
    c[2] = 'foo';
    var len2 = c.length;
    c.length = 1;
    return len1 === 0 && len2 === 3 && c.length === 1 && !(2 in c);
}

/*
 * Test: Array.prototype.slice
 */
function Arrayprototypeslice() {
    class C extends Array {}
    var c = new C();
    c.push(2,4,6);
    return c.slice(1,2) instanceof C;
}

/*
 * Test: Array.from
 */
function Arrayfrom() {
    class C extends Array {}
    return C.from({ length: 0 }) instanceof C;
}

/*
 * Test: Array.of
 */
function Arrayof() {
    class C extends Array {}
    return C.of(0) instanceof C;
}

