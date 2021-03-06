/* Name: rest parameters
 * Category: syntax
 * Significance: medium
 * Link: http://www.ecma-international.org/ecma-262/6.0/#sec-function-definitions
 */


/*
 * Test: basic functionality
 */
function() {
    return (function (foo, ...args) {
      return args instanceof Array && args + "" === "bar,baz";
    }("foo", "bar", "baz"));
}

/*
 * Test: function 'length' property
 */
function() {
    return function(a, ...b){}.length === 1 && function(...c){}.length === 0;
}

/*
 * Test: arguments object interaction
 */
function() {
    return (function (foo, ...args) {
      foo = "qux";
      // The arguments object is not mapped to the
      // parameters, even outside of strict mode.
      return arguments.length === 3
        && arguments[0] === "foo"
        && arguments[1] === "bar"
        && arguments[2] === "baz";
    }("foo", "bar", "baz"));
}

/*
 * Test: can't be used in setters
 */
function() {
    return (function (...args) {
      try {
        eval("({set e(...args){}})");
      } catch(e) {
        return true;
      }
    }());
}

