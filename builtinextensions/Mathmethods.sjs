/* Name: Math methods
 * Category: built-in extensions
 * Significance: small
 * Link: https://people.mozilla.org/~jorendorff/es6-draft.html#sec-math
 *//*
 * Test: Math.clz32
 */
function Mathclz32() {
turn typeof Math.clz32 === "function"}

/*
 * Test: Math.imul
 */
function Mathimul() {
turn typeof Math.imul === "function"}

/*
 * Test: Math.sign
 */
function Mathsign() {
turn typeof Math.sign === "function"}

/*
 * Test: Math.log10
 */
function Mathlog10() {
turn typeof Math.log10 === "function"}

/*
 * Test: Math.log2
 */
function Mathlog2() {
turn typeof Math.log2 === "function"}

/*
 * Test: Math.log1p
 */
function Mathlog1p() {
turn typeof Math.log1p === "function"}

/*
 * Test: Math.expm1
 */
function Mathexpm1() {
turn typeof Math.expm1 === "function"}

/*
 * Test: Math.cosh
 */
function Mathcosh() {
turn typeof Math.cosh === "function"}

/*
 * Test: Math.sinh
 */
function Mathsinh() {
turn typeof Math.sinh === "function"}

/*
 * Test: Math.tanh
 */
function Mathtanh() {
turn typeof Math.tanh === "function"}

/*
 * Test: Math.acosh
 */
function Mathacosh() {
turn typeof Math.acosh === "function"}

/*
 * Test: Math.asinh
 */
function Mathasinh() {
turn typeof Math.asinh === "function"}

/*
 * Test: Math.atanh
 */
function Mathatanh() {
turn typeof Math.atanh === "function"}

/*
 * Test: Math.trunc
 */
function Mathtrunc() {
turn typeof Math.trunc === "function"}

/*
 * Test: Math.fround
 */
function Mathfround() {
turn typeof Math.fround === "function"}

/*
 * Test: Math.cbrt
 */
function Mathcbrt() {
turn typeof Math.cbrt === "function"}

/*
 * Test: Math.hypot
 */
function Mathhypot() {
    return Math.hypot() === 0 &&
      Math.hypot(1) === 1 &&
      Math.hypot(9, 12, 20) === 25 &&
      Math.hypot(27, 36, 60, 100) === 125;
}

