/* Name: miscellaneous
 * Category: misc
 * Significance: small
 * Link: http://www.ecma-international.org/ecma-262/6.0/#sec-additions-and-changes-that-introduce-incompatibilities-with-prior-editions
 */

/*
 * Test: no escaped reserved words as identifiers
 */
function() {
    var \u0061;
    try {
      eval('var v\\u0061r');
    } catch(e) {
      return true;
    }
}

/*
 * Test: duplicate property names in strict mode
 */
function() {
    'use strict';
    return this === undefined && ({ a:1, a:1 }).a === 1;
}

/*
 * Test: no semicolon needed after do-while
 */
function() {
    do {} while (false) return true;
}

/*
 * Test: no assignments allowed in for-in head
 */
function() {
    try {
      eval('for (var i = 0 in {}) {}');
    }
    catch(e) {
      return true;
    }
}

/*
 * Test: accessors aren't constructors
 */
function() {
    try {
      new (Object.getOwnPropertyDescriptor({get a(){}}, 'a')).get;
    } catch(e) {
      return true;
    }
}

/*
 * Test: Invalid Date
 */
function() {
    return new Date(NaN) + "" === "Invalid Date";
}

/*
 * Test: RegExp constructor can alter flags
 */
function() {
    return new RegExp(/./im, "g").global === true;
}

/*
 * Test: built-in prototypes are not instances
 */
function() {
    try {
      RegExp.prototype.source; return false;
    } catch(e) {}
    try {
      Date.prototype.valueOf(); return false;
    } catch(e) {}
    return true;
}

/*
 * Test: function 'length' is configurable
 */
function() {
    var fn = function(a, b) {};

    var desc = Object.getOwnPropertyDescriptor(fn, "length");
    if (desc.configurable) {
      Object.defineProperty(fn, "length", { value: 1 });
      return fn.length === 1;
    }

    return false;
}

