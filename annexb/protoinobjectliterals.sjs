/* Name: __proto__ in object literals
 * Category: annex b
 * Significance: small
 * Link: http://people.mozilla.org/~jorendorff/es6-draft.html#sec-__proto__-property-names-in-object-initializers
 *//*
 * Test: basic support
 */
function basicsupport() {
    return { __proto__ : [] } instanceof Array
      && !({ __proto__ : null } instanceof Object);
}

/*
 * Test: multiple __proto__ is an error
 */
function multipleprotoisanerror() {
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
function notacomputedproperty() {
    if (!({ __proto__ : [] } instanceof Array)) {
      return false;
    }
    var a = "__proto__";
    return !({ [a] : [] } instanceof Array);
}

/*
 * Test: not a shorthand property
 */
function notashorthandproperty() {
    if (!({ __proto__ : [] } instanceof Array)) {
      return false;
    }
    var __proto__ = [];
    return !({ __proto__ } instanceof Array);
}

/*
 * Test: not a shorthand method
 */
function notashorthandmethod() {
    if (!({ __proto__ : [] } instanceof Array)) {
      return false;
    }
    return !({ __proto__(){} } instanceof Function);
}

