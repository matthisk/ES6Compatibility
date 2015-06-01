/* Name: spread (...) operator
 * Category: syntax
 * Significance: large
 * Link: https://people.mozilla.org/~jorendorff/es6-draft.html#sec-argument-lists-runtime-semantics-argumentlistevaluation
 */

/*
 * Test: with arrays, in function calls
 */
function() {
    return Math.max(...[1, 2, 3]) === 3
}

/*
 * Test: with arrays, in array literals
 */
function() {
   return [...[1, 2, 3]][2] === 3;
}

/*
 * Test: with strings, in function calls
 */
function() {
   return Math.max(..."1234") === 4;
}

/*
 * Test: with strings, in array literals
 */
function() {
   return ["a", ..."bcd", "e"][3] === "d";
}

/*
 * Test: with astral plane strings, in function calls
 */
function() {
   return Array(..."𠮷𠮶")[0] === "𠮷";
}

/*
 * Test: with astral plane strings, in array literals
 */
function() {
   return [..."𠮷𠮶"][0] === "𠮷";
}

/*
 * Test: with generic iterables, in calls
 */
function() {
    var iterable = global.__createIterableObject(1, 2, 3);
    return Math.max(...iterable) === 3;
}

/*
 * Test: with generic iterables, in arrays
 */
function() {
    var iterable = global.__createIterableObject("b", "c", "d");
    return ["a", ...iterable, "e"][3] === "d";
}

/*
 * Test: with instances of iterables, in calls
 */
function() {
    var iterable = global.__createIterableObject(1, 2, 3);
    return Math.max(...Object.create(iterable)) === 3;
}

/*
 * Test: with instances of iterables, in arrays
 */
function() {
    var iterable = global.__createIterableObject("b", "c", "d");
    return ["a", ...Object.create(iterable), "e"][3] === "d";
}

