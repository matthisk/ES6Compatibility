/* Name: function "name" property
 * Category: built-in extensions
 * Significance: small
 * Link: https://people.mozilla.org/~jorendorff/es6-draft.html#sec-setfunctionname
 */

/*
 * Test: function statements
 */
function() {
    function foo(){};
    return foo.name === 'foo' &&
      (function(){}).name === '';
}

/*
 * Test: function expressions
 */
function() {
    return (function foo(){}).name === 'foo' &&
      (function(){}).name === '';
}

/*
 * Test: new Function
 */
function() {
    return (new Function).name === "anonymous";
}

/*
 * Test: bound functions
 */
function() {
    function foo() {};
    return foo.bind({}).name === "bound foo" &&
      (function(){}).bind({}).name === "bound ";
}

/*
 * Test: variables (function)
 */
function() {
    var foo = function() {};
    var bar = function baz() {};
    return foo.name === "foo" && bar.name === "baz";
}

/*
 * Test: object methods (function)
 */
function() {
    var o = { foo: function(){}, bar: function baz(){}};
    o.qux = function(){};
    return o.foo.name === "foo" &&
           o.bar.name === "baz" &&
           o.qux.name === "";
}

/*
 * Test: accessor properties
 */
function() {
    var o = { get foo(){}, set foo(x){} };
    var descriptor = Object.getOwnPropertyDescriptor(o, "foo");
    return descriptor.get.name === "get foo" &&
           descriptor.set.name === "set foo";
}

/*
 * Test: shorthand methods
 */
function() {
    var o = { foo(){} };
    return o.foo.name === "foo";
}

/*
 * Test: shorthand methods (no lexical binding)
 */
function() {
    var f = "foo";
    return ({f() { return f; }}).f() === "foo";
}

/*
 * Test: symbol-keyed methods
 */
function() {
    var sym1 = Symbol("foo");
    var sym2 = Symbol();
    var o = {
      [sym1]: function(){},
      [sym2]: function(){}
    };

    return o[sym1].name === "[foo]" &&
           o[sym2].name === "";
}

/*
 * Test: class statements
 */
function() {
    class foo {};
    class bar { static name() {} };
    return foo.name === "foo" &&
      typeof bar.name === "function";
}

/*
 * Test: class expressions
 */
function() {
    return class foo {}.name === "foo" &&
      typeof class bar { static name() {} }.name === "function";
}

/*
 * Test: variables (class)
 */
function() {
    var foo = class {};
    var bar = class baz {};
    var qux = class { static name() {} };
    return foo.name === "foo" &&
           bar.name === "baz" &&
           typeof qux.name === "function";
}

/*
 * Test: object methods (class)
 */
function() {
    var o = { foo: class {}, bar: class baz {}};
    o.qux = class {};
    return o.foo.name === "foo" &&
           o.bar.name === "baz" &&
           o.qux.name === "";
}

/*
 * Test: class prototype methods
 */
function() {
    class C { foo(){} };
    return (new C).foo.name === "foo";
}

/*
 * Test: class static methods
 */
function() {
    class C { static foo(){} };
    return C.foo.name === "foo";
}

/*
 * Test: isn't writable, is configurable
 */
function() {
    var descriptor = Object.getOwnPropertyDescriptor(function f(){},"name");
    return descriptor.enumerable   === false &&
           descriptor.writable     === false &&
           descriptor.configurable === true;
}

