/* Name: block-level function declaration
 * Category: bindings
 * Significance: small
 * Link: http://www.ecma-international.org/ecma-262/6.0/#sec-functiondeclarationinstantiation
 */

/*
 * Test: block-level function declaration
 */
function() {
'use strict';
function f() { return 1; }
{
  function f() { return 2; }
}
return f() === 1}

