/* Name: const
 * Category: bindings
 * Significance: medium
 * Link: https://people.mozilla.org/~jorendorff/es6-draft.html#sec-let-and-const-declarations
 *//*
 * Test: basic support
 */
function basicsupport() {
    const foo = 123;
    return (foo === 123);
}

/*
 * Test: is block-scoped
 */
function isblockscoped() {
    const bar = 123;
    { const bar = 456; }
    return bar === 123;
}

/*
 * Test: redefining a const is an error
 */
function redefiningaconstisanerror() {
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
function temporaldeadzone() {
    var passed = (function(){ try { qux; } catch(e) { return true; }}());
    const qux = 456;
    return passed;
}

/*
 * Test: basic support (strict mode)
 */
function basicsupport() {
    "use strict";
    const foo = 123;
    return (foo === 123);
}

/*
 * Test: is block-scoped (strict mode)
 */
function isblockscoped() {
    'use strict';
    const bar = 123;
    { const bar = 456; }
    return bar === 123;
}

/*
 * Test: redefining a const (strict mode)
 */
function redefiningaconst() {
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
function temporaldeadzone() {
    'use strict';
    var passed = (function(){ try { qux; } catch(e) { return true; }}());
    const qux = 456;
    return passed;
}

