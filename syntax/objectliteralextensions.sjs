/* Name: object literal extensions
 * Category: syntax
 * Significance: large
 * Link: http://people.mozilla.org/~jorendorff/es6-draft.html#sec-object-initialiser
 */

/*
 * Test: computed properties
 */
function() {
    var x = 'y';
    return ({ [x]: 1 }).y === 1;
}

/*
 * Test: shorthand properties
 */
function() {
    var a = 7, b = 8, c = {a,b};
    return c.a === 7 && c.b === 8;
}

/*
 * Test: shorthand methods
 */
function() {
    return ({ y() { return 2; } }).y() === 2;
}

/*
 * Test: string-keyed shorthand methods
 */
function() {
    return ({ "foo bar"() { return 4; } })["foo bar"]() === 4;
}

/*
 * Test: computed shorthand methods
 */
function() {
    var x = 'y';
    return ({ [x](){ return 1; } }).y() === 1;
}

/*
 * Test: computed accessors
 */
function() {
    var x = 'y',
        valueSet,
        obj = {
          get [x] () { return 1; },
          set [x] (value) { valueSet = value; }
        };
    obj.y = 'foo';
    return obj.y === 1 && valueSet === 'foo';
}

