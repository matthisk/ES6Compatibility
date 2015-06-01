/* Name: for..of loops
 * Category: syntax
 * Significance: large
 * Link: https://people.mozilla.org/~jorendorff/es6-draft.html#sec-for-in-and-for-of-statements
 *//*
 * Test: with arrays
 */
function witharrays() {
    var arr = [5];
    for (var item of arr)
      return item === 5;
}

/*
 * Test: with strings
 */
function withstrings() {
    var str = "";
    for (var item of "foo")
      str += item;
    return str === "foo";
}

/*
 * Test: with astral plane strings
 */
function withastralplanestrings() {
    var str = "";
    for (var item of "𠮷𠮶")
      str += item + " ";
    return str === "𠮷 𠮶 ";
}

/*
 * Test: with generic iterables
 */
function withgenericiterables() {
    var result = "";
    var iterable = global.__createIterableObject(1, 2, 3);
    for (var item of iterable) {
      result += item;
    }
    return result === "123";
}

/*
 * Test: with instances of generic iterables
 */
function withinstancesofgenericiterables() {
    var result = "";
    var iterable = global.__createIterableObject(1, 2, 3);
    for (var item of Object.create(iterable)) {
      result += item;
    }
    return result === "123";
}

/*
 * Test: iterator closing, break
 */
function iteratorclosing,break() {
    var closed = false;
    var iter = __createIterableObject(1, 2, 3);
    iter['return'] = function(){ closed = true; return {}; }
    for (var it of iter) break;
    return closed;
}

/*
 * Test: iterator closing, throw
 */
function iteratorclosing,throw() {
    var closed = false;
    var iter = __createIterableObject(1, 2, 3);
    iter['return'] = function(){ closed = true; return {}; }
    try {
      for (var it of iter) throw 0;
    } catch(e){}
    return closed;
}

