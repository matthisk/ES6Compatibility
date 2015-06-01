/* Name: Symbol
 * Category: built-ins
 * Significance: medium
 * Link: http://people.mozilla.org/~jorendorff/es6-draft.html#sec-symbol-constructor
 *//*
 * Test: basic functionality
 */
function basicfunctionality() {
    var object = {};
    var symbol = Symbol();
    var value = {};
    object[symbol] = value;
    return object[symbol] === value;
}

/*
 * Test: typeof support
 */
function typeofsupport() {
    return typeof Symbol() === "symbol";
}

/*
 * Test: symbol keys are hidden to pre-ES6 code
 */
function symbolkeysarehiddentopreES6code() {
    var object = {};
    var symbol = Symbol();
    object[symbol] = 1;

    for (var x in object){}
    var passed = !x;

    if (Object.keys && Object.getOwnPropertyNames) {
      passed &= Object.keys(object).length === 0
        && Object.getOwnPropertyNames(object).length === 0;
    }

    return passed;
}

/*
 * Test: Object.defineProperty support
 */
function ObjectdefinePropertysupport() {
    var object = {};
    var symbol = Symbol();
    var value = {};

    if (Object.defineProperty) {
      Object.defineProperty(object, symbol, { value: value });
      return object[symbol] === value;
    }

    return passed;
}

/*
 * Test: cannot coerce to string or number
 */
function cannotcoercetostringornumber() {
    var symbol = Symbol();

    try {
      symbol + "";
      return false;
    }
    catch(e) {}

    try {
      symbol + 0;
      return false;
    } catch(e) {}

    return true;
}

/*
 * Test: can convert with String()
 */
function canconvertwithString() {
    return String(Symbol("foo")) === "Symbol(foo)";
}

/*
 * Test: new Symbol() throws
 */
function newSymbolthrows() {
    var symbol = Symbol();
    try {
      new Symbol();
    } catch(e) {
      return true;
    }
}

/*
 * Test: Object(symbol)
 */
function Object() {
    var symbol = Symbol();
    var symbolObject = Object(symbol);

    return typeof symbolObject === "object" &&
      symbolObject == symbol &&
      symbolObject !== symbol &&
      symbolObject.valueOf() === symbol;
}

/*
 * Test: global symbol registry
 */
function globalsymbolregistry() {
    var symbol = Symbol.for('foo');
    return Symbol.for('foo') === symbol &&
       Symbol.keyFor(symbol) === 'foo';
}

