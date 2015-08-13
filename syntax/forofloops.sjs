/* Name: for..of loops
 * Category: syntax
 * Significance: large
 * Link: http://www.ecma-international.org/ecma-262/6.0/#sec-for-in-and-for-of-statements
 */

/*
 * Test: with arrays
 */
function() {
    var arr = [5];
    for (var item of arr)
      return item === 5;
}

/*
 * Test: with sparse arrays
 */
/*function() {
    var arr = [,,];
    var count = 0;
    for (var item of arr)
      count += (item === undefined);
    return count === 2;
}*/

/*
 * Test: with strings
 */
function() {
    var str = "";
    for (var item of "foo")
      str += item;
    return str === "foo";
}

/*
 * Test: with astral plane strings
 */
function() {
    var str = "";
    for (var item of "𠮷𠮶")
      str += item + " ";
    return str === "𠮷 𠮶 ";
}

/*
 * Test: with generator instances
 */
/*function() {
    var result = "";
    var iterable = (function*(){ yield 1; yield 2; yield 3; }());
    for (var item of iterable) {
      result += item;
    }
    return result === "123";
}*/

/*
 * Test: with generic iterables
 */
function() {
    var result = "";
    var iterable = __createIterableObject([1, 2, 3]);
    for (var item of iterable) {
      result += item;
    }
    return result === "123";
}

/*
 * Test: with instances of generic iterables
 */
function() {
    var result = "";
    var iterable = __createIterableObject([1, 2, 3]);
    for (var item of Object.create(iterable)) {
      result += item;
    }
    return result === "123";
}

/*
 * Test: iterator closing, break
 */
function() {
    var closed = false;
    var iter = __createIterableObject([1, 2, 3], {
      'return': function(){ closed = true; return {}; }
    });
    for (var it of iter) break;
    return closed;
}

/*
 * Test: iterator closing, throw
 */
function() {
    var closed = false;
    var iter = __createIterableObject([1, 2, 3], {
      'return': function(){ closed = true; return {}; }
    });
    try {
      for (var it of iter) throw 0;
    } catch(e){}
    return closed;
}

