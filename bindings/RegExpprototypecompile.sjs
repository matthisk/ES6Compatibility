/* Name: block-level function declaration
 * Category: bindings
 * Significance: small
 * Link: https://people.mozilla.org/~jorendorff/es6-draft.html#sec-functiondeclarationinstantiation
 *//*
 * Test: block-level function declaration
 */
function blocklevelfunctiondeclaration() {
'use strict';
function f() { return 1; }
{
  function f() { return 2; }
}
return f() === 1}

 === 123;
}

/*
 * Test: for-loop statement scope
 */
function forloopstatementscope() {
    let baz = 1;
    for(let baz = 0; false; false) {}
    return baz === 1;
}

/*
 * Test: temporal dead zone
 */
function temporaldeadzone() {
    var passed = (function(){ try {  qux; } catch(e) { return true; }}());
    let qux = 456;
    return passed;
}

/*
 * Test: for-loop iteration scope
 */
function forloopiterationscope() {
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
function basicsupport() {
    'use strict';
    let foo = 123;
    return (foo === 123);
}

/*
 * Test: is block-scoped (strict mode)
 */
function isblockscoped() {
    'use strict';
    let bar = 123;
    { let bar = 456; }
    return bar === 123;
}

/*
 * Test: for-loop statement scope (strict mode)
 */
function forloopstatementscope() {
    'use strict';
    let baz = 1;
    for(let baz = 0; false; false) {}
    return baz === 1;
}

/*
 * Test: temporal dead zone (strict mode)
 */
function temporaldeadzone() {
    'use strict';
    var passed = (function(){ try {  qux; } catch(e) { return true; }}());
    let qux = 456;
    return passed;
}

/*
 * Test: for-loop iteration scope (strict mode)
 */
function forloopiterationscope() {
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

