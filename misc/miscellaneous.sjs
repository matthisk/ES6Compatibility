/* Name: miscellaneous
 * Category: misc
 * Significance: small
 * Link: https://people.mozilla.org/~jorendorff/es6-draft.html#sec-additions-and-changes-that-introduce-incompatibilities-with-prior-editions
 *//*
 * Test: no escaped reserved words as identifiers
 */
function noescapedreservedwordsasidentifiers() {
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
function duplicatepropertynamesinstrictmode() {
    'use strict';
    return this === undefined && ({ a:1, a:1 }).a === 1;
}

/*
 * Test: no semicolon needed after do-while
 */
function nosemicolonneededafterdowhile() {
    do {} while (false) return true;
}

/*
 * Test: no assignments allowed in for-in head
 */
function noassignmentsallowedinforinhead() {
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
function accessorsarentconstructors() {
    try {
      new (Object.getOwnPropertyDescriptor({get a(){}}, 'a')).get;
    } catch(e) {
      return true;
    }
}

/*
 * Test: Invalid Date
 */
function InvalidDate() {
    return new Date(NaN) + "" === "Invalid Date";
}

/*
 * Test: RegExp constructor can alter flags
 */
function RegExpconstructorcanalterflags() {
    return new RegExp(/./im, "g").global === true;
}

/*
 * Test: built-in prototypes are not instances
 */
function builtinprototypesarenotinstances() {
    try {
      Boolean.prototype.valueOf(); return false;
    } catch(e) {}
    try {
      Number.prototype.valueOf(); return false;
    } catch(e) {}
    try {
      String.prototype.toString(); return false;
    } catch(e) {}
    try {
      RegExp.prototype.source; return false;
    } catch(e) {}
    try {
      Date.prototype.valueOf(); return false;
    } catch(e) {}
    return true;
}

