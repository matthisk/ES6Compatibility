/* Name: new.target
 * Category: syntax
 * Significance: small
 * Link: http://www.ecma-international.org/ecma-262/6.0/#sec-built-in-function-objects
 */

/*
 * Test: in constructors
 */
function() {
    var passed = false;
    new function f() {
      passed = (new.target === f);
    }();
    (function() {
      passed &= (new.target === undefined);
    }());
    return passed;
}

/*
 * Test: assignment is an early error
 */
function() {
    var passed = false;
    new function f() {
      passed = (new.target === f);
    }();

    try {
      Function("new.target = function(){};");
    } catch(e) {
      return passed;
    }
}

