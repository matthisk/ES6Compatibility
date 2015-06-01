/* Name: rest parameters
 * Category: syntax
 * Significance: medium
 * Link: https://people.mozilla.org/~jorendorff/es6-draft.html#sec-function-definitions
 *//*
 * Test: basic functionality
 */
function basicfunctionality() {
    return (function (foo, ...args) {
      return args instanceof Array && args + "" === "bar,baz";
    }("foo", "bar", "baz"));
}

/*
 * Test: function 'length' property
 */
function functionlengthproperty() {
    return function(a, ...b){}.length === 1 && function(...c){}.length === 0;
}

/*
 * Test: arguments object interaction
 */
function argumentsobjectinteraction() {
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
function cantbeusedinsetters() {
    return (function (...args) {
      try {
        eval("({set e(...args){}})");
      } catch(e) {
        return true;
      }
    }());
}

/*
 * Test: new Function() support
 */
function newFunctionsupport() {
    return new Function("a", "...b",
      "return b instanceof Array && a+b === 'foobar,baz';"
    )('foo','bar','baz');
}

