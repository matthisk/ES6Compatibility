/* Name: proper tail calls (tail call optimisation)
 * Category: optimisation
 * Significance: medium
 * Link: http://www.ecma-international.org/ecma-262/6.0/#sec-tail-position-calls
 */

/*
 * Test: direct recursion
 */
function() {
    "use strict";
    return (function f(n){
      if (n <= 0) {
        return  "foo";
      }
      return f(n - 1);
    }(1e6)) === "foo";
}

/*
 * Test: mutual recursion
 */
function() {
    "use strict";
    function f(n){
      if (n <= 0) {
        return  "foo";
      }
      return g(n - 1);
    }
    function g(n){
      if (n <= 0) {
        return  "bar";
      }
      return f(n - 1);
    }
    return f(1e6) === "foo" && f(1e6+1) === "bar";
}

