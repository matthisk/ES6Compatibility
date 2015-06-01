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

