/* Name: const
 * Category: bindings
 * Significance: medium
 * Link: http://www.ecma-international.org/ecma-262/6.0/#sec-let-and-const-declarations
 */

/*
 * Test: basic support
 */
function() {
    const foo = 123;
    return (foo === 123);
}

/*
 * Test: is block-scoped
 */
function() {
    const bar = 123;
    { const bar = 456; }
    return bar === 123;
}

/*
 * Test: redefining a const is an error
 */
function() {
    const baz = 1;
    try {
      Function("const foo = 1; foo = 2;")();
    } catch(e) {
      return true;
    }
}

/*
 * Test: temporal dead zone
 */
function() {
    var passed = (function(){ try { qux; } catch(e) { return true; }}());
    function fn() { passed &= qux === 456; }
    const qux = 456;
    fn();
    return passed;
}

/*
 * Test: basic support (strict mode)
 */
function() {
    "use strict";
    const foo = 123;
    return (foo === 123);
}

/*
 * Test: is block-scoped (strict mode)
 */
function() {
    'use strict';
    const bar = 123;
    { const bar = 456; }
    return bar === 123;
}

/*
 * Test: redefining a const (strict mode)
 */
function() {
    'use strict';
    const baz = 1;
    try {
      Function("'use strict'; const foo = 1; foo = 2;")();
    } catch(e) {
      return true;
    }
}

/*
 * Test: temporal dead zone (strict mode)
 */
function() {
    'use strict';
    var passed = (function(){ try { qux; } catch(e) { return true; }}());
    function fn() { passed &= qux === 456; }
    const qux = 456;
    fn();
    return passed;
}

