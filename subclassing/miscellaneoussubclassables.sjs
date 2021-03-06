/* Name: miscellaneous subclassables
 * Category: subclassing
 * Significance: tiny
 * Link: http://www.ecma-international.org/ecma-262/6.0/#sec-boolean-constructor
 */

/*
 * Test: Boolean is subclassable
 */
function() {
    class C extends Boolean {}
    var c = new C(true);
    return c instanceof Boolean
      && c == true;
}

/*
 * Test: Number is subclassable
 */
function() {
    class C extends Number {}
    var c = new C(6);
    return c instanceof Number
      && +c === 6;
}

/*
 * Test: String is subclassable
 */
function() {
    class C extends String {}
    var c = new C("golly");
    return c instanceof String
      && c + '' === "golly"
      && c[0] === "g"
      && c.length === 5;
}

/*
 * Test: Map is subclassable
 */
function() {
    var key = {};
    class M extends Map {}
    var map = new M();

    map.set(key, 123);

    return map.has(key) && map.get(key) === 123;
}

/*
 * Test: Set is subclassable
 */
function() {
    var obj = {};
    class S extends Set {}
    var set = new S();

    set.add(123);
    set.add(123);

    return set.has(123);
}

