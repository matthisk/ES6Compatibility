/* Name: hoisted block-level function declaration
 * Category: annex b
 * Significance: small
 * Link: https://people.mozilla.org/~jorendorff/es6-draft.html#sec-block-level-function-declarations-web-legacy-compatibility-semantics
 *//*
 * Test: hoisted block-level function declaration
 */
function hoistedblocklevelfunctiondeclaration() {
// Note: only available outside of strict mode.
{ function f() { return 1; } }
  function g() { return 1; }
{ function g() { return 2; } }
{ function h() { return 1; } }
  function h() { return 2; }

return f() === 1 && g() === 2 && h() === 1}

