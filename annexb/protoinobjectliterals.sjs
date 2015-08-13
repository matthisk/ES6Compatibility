/* Name: __proto__ in object literals
 * Category: annex b
 * Significance: tiny
 * Link: http://www.ecma-international.org/ecma-262/6.0/#sec-__proto__-property-names-in-object-initializers
 */

/*
 * Test: basic support
 */
function() {
    return { __proto__ : [] } instanceof Array
      && !({ __proto__ : null } instanceof Object);
}

/*
 * Test: multiple __proto__ is an error
 */
function() {
    try {
      eval("({ __proto__ : [], __proto__: {} })");
    }
    catch(e) {
      return true;
    }
}

/*
 * Test: not a computed property
 */
function() {
    if (!({ __proto__ : [] } instanceof Array)) {
      return false;
    }
    var a = "__proto__";
    return !({ [a] : [] } instanceof Array);
}

/*
 * Test: not a shorthand property
 */
function() {
    if (!({ __proto__ : [] } instanceof Array)) {
      return false;
    }
    var __proto__ = [];
    return !({ __proto__ } instanceof Array);
}

/*
 * Test: not a shorthand method
 */
function() {
    if (!({ __proto__ : [] } instanceof Array)) {
      return false;
    }
    return !({ __proto__(){} } instanceof Function);
}

