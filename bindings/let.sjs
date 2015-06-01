/* Name: let
 * Category: bindings
 * Significance: medium
 * Link: https://people.mozilla.org/~jorendorff/es6-draft.html#sec-let-and-const-declarations
 */

/*
 * Test: basic support
 */
function() {
    let foo = 123;
    return (foo === 123);
}

/*
 * Test: is block-scoped
 */
function() {
    let bar = 123;
    { let bar = 456; }
    return bar === 123;
}

/*
 * Test: for-loop statement scope
 */
function() {
    let baz = 1;
    for(let baz = 0; false; false) {}
    return baz === 1;
}

/*
 * Test: temporal dead zone
 */
function() {
    var passed = (function(){ try {  qux; } catch(e) { return true; }}());
    let qux = 456;
    return passed;
}

/*
 * Test: for-loop iteration scope
 */
function() {
    let scopes = [];
    for(let i = 0; i < 2; i++) {
      scopes.push(function(){ return i; });
    }
    let passed = (scopes[0]() === 0 && scopes[1]() === 1);

    scopes = [];
    for(let i in { a:1, b:1 }) {
      scopes.push(function(){ return i; });
    }
    passed &= (scopes[0]() === "a" && scopes[1]() === "b");
    return passed;
}

/*
 * Test: basic support (strict mode)
 */
function() {
    'use strict';
    let foo = 123;
    return (foo === 123);
}

/*
 * Test: is block-scoped (strict mode)
 */
function() {
    'use strict';
    let bar = 123;
    { let bar = 456; }
    return bar === 123;
}

/*
 * Test: for-loop statement scope (strict mode)
 */
function() {
    'use strict';
    let baz = 1;
    for(let baz = 0; false; false) {}
    return baz === 1;
}

/*
 * Test: temporal dead zone (strict mode)
 */
function() {
    'use strict';
    var passed = (function(){ try {  qux; } catch(e) { return true; }}());
    let qux = 456;
    return passed;
}

/*
 * Test: for-loop iteration scope (strict mode)
 */
function() {
    'use strict';
    let scopes = [];
    for(let i = 0; i < 2; i++) {
      scopes.push(function(){ return i; });
    }
    let passed = (scopes[0]() === 0 && scopes[1]() === 1);

    scopes = [];
    for(let i in { a:1, b:1 }) {
      scopes.push(function(){ return i; });
    }
    passed &= (scopes[0]() === "a" && scopes[1]() === "b");
    return passed;
}

