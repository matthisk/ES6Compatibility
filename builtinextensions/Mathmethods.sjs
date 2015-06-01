/* Name: Math methods
 * Category: built-in extensions
 * Significance: small
 * Link: https://people.mozilla.org/~jorendorff/es6-draft.html#sec-math
 */

/*
 * Test: Math.clz32
 */
function() {
turn typeof Math.clz32 === "function"}

/*
 * Test: Math.imul
 */
function() {
turn typeof Math.imul === "function"}

/*
 * Test: Math.sign
 */
function() {
turn typeof Math.sign === "function"}

/*
 * Test: Math.log10
 */
function() {
turn typeof Math.log10 === "function"}

/*
 * Test: Math.log2
 */
function() {
turn typeof Math.log2 === "function"}

/*
 * Test: Math.log1p
 */
function() {
turn typeof Math.log1p === "function"}

/*
 * Test: Math.expm1
 */
function() {
turn typeof Math.expm1 === "function"}

/*
 * Test: Math.cosh
 */
function() {
turn typeof Math.cosh === "function"}

/*
 * Test: Math.sinh
 */
function() {
turn typeof Math.sinh === "function"}

/*
 * Test: Math.tanh
 */
function() {
turn typeof Math.tanh === "function"}

/*
 * Test: Math.acosh
 */
function() {
turn typeof Math.acosh === "function"}

/*
 * Test: Math.asinh
 */
function() {
turn typeof Math.asinh === "function"}

/*
 * Test: Math.atanh
 */
function() {
turn typeof Math.atanh === "function"}

/*
 * Test: Math.trunc
 */
function() {
turn typeof Math.trunc === "function"}

/*
 * Test: Math.fround
 */
function() {
turn typeof Math.fround === "function"}

/*
 * Test: Math.cbrt
 */
function() {
turn typeof Math.cbrt === "function"}

/*
 * Test: Math.hypot
 */
function() {
    return Math.hypot() === 0 &&
      Math.hypot(1) === 1 &&
      Math.hypot(9, 12, 20) === 25 &&
      Math.hypot(27, 36, 60, 100) === 125;
}

