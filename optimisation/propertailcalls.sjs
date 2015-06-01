/* Name: proper tail calls (tail call optimisation)
 * Category: optimisation
 * Significance: medium
 * Link: https://people.mozilla.org/~jorendorff/es6-draft.html#sec-tail-position-calls
 *//*
 * Test: direct recursion
 */
function directrecursion() {
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
function mutualrecursion() {
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

