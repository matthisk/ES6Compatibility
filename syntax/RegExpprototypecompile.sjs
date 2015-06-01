/* Name: Unicode code point escapes
 * Category: syntax
 * Significance: small
 * Link: https://people.mozilla.org/~jorendorff/es6-draft.html#sec-literals-string-literals
 *//*
 * Test: in strings
 */
function instrings() {
    return '\u{1d306}' == '\ud834\udf06';
}

/*
 * Test: in identifiers
 */
function inidentifiers() {
    var \u{102C0} = { \u{102C0} : 2 };
    return \u{102C0}['\ud800\udec0'] === 2;
}

ngs() {
    var [a, b, c] = "ab";
    var d, e;
    [d,e] = "de";
    return a === "a" && b === "b" && c === undefined
      && d === "d" && e === "e";
}

/*
 * Test: with astral plane strings
 */
function withastralplanestrings() {
    var c;
    [c] = "𠮷𠮶";
    return c === "𠮷";
}

/*
 * Test: with generic iterables
 */
function withgenericiterables() {
    var [a, b, c] = global.__createIterableObject(1, 2);
    var d, e;
    [d, e] = global.__createIterableObject(3, 4);
    return a === 1 && b === 2 && c === undefined
      && d === 3 && e === 4;
}

/*
 * Test: with instances of generic iterables
 */
function withinstancesofgenericiterables() {
    var [a, b, c] = Object.create(global.__createIterableObject(1, 2))
    var d, e;
    [d, e] = Object.create(global.__createIterableObject(3, 4));
    return a === 1 && b === 2 && c === undefined
      && d === 3 && e === 4;
}

/*
 * Test: iterator closing
 */
function iteratorclosing() {
    var closed = false;
    var iter = __createIterableObject(1, 2, 3);
    iter['return'] = function(){ closed = true; return {}; }
    var [a, b] = iter;
    return closed;
}

/*
 * Test: iterable destructuring expression
 */
function iterabledestructuringexpression() {
    var a, b, iterable = [1,2];
    return ([a, b] = iterable) === iterable;
}

/*
 * Test: chained iterable destructuring
 */
function chainediterabledestructuring() {
    var a,b,c,d;
    [a,b] = [c,d] = [1,2];
    return a === 1 && b === 2 && c === 1 && d === 2;
}

/*
 * Test: trailing commas in iterable patterns
 */
function trailingcommasiniterablepatterns() {
    var [a,] = [1];
    return a === 1;
}

/*
 * Test: with objects
 */
function withobjects() {
    var {c, x:d, e} = {c:7, x:8};
    var f, g;
    ({f,g} = {f:9,g:10});
    return c === 7 && d === 8 && e === undefined
      && f === 9 && g === 10;
}

/*
 * Test: object destructuring with primitives
 */
function objectdestructuringwithprimitives() {
    var {toFixed} = 2;
    var {slice} = '';
    var toString, match;
    ({toString} = 2);
    ({match} = '');
    return toFixed === Number.prototype.toFixed
      && toString === Number.prototype.toString
      && slice === String.prototype.slice
      && match === String.prototype.match;
}

/*
 * Test: trailing commas in object patterns
 */
function trailingcommasinobjectpatterns() {
    var {a,} = {a:1};
    return a === 1;
}

/*
 * Test: object destructuring expression
 */
function objectdestructuringexpression() {
    var a, b, obj = { a:1, b:2 };
    return ({a,b} = obj) === obj;
}

/*
 * Test: chained object destructuring
 */
function chainedobjectdestructuring() {
    var a,b,c,d;
    ({a,b} = {c,d} = {a:1,b:2,c:3,d:4});
    return a === 1 && b === 2 && c === 3 && d === 4;
}

/*
 * Test: throws on null and undefined
 */
function throwsonnullandundefined() {
    try {
      var {a} = null;
      return false;
    } catch(e) {}
    try {
      var {b} = undefined;
      return false;
    } catch(e) {}
    return true;
}

/*
 * Test: computed properties
 */
function computedproperties() {
    var qux = "corge";
    var { [qux]: grault } = { corge: "garply" };
    return grault === "garply";
}

/*
 * Test: multiples in a single var statement
 */
function multiplesinasinglevarstatement() {
    var [a,b] = [5,6], {c,d} = {c:7,d:8};
    return a === 5 && b === 6 && c === 7 && d === 8;
}

/*
 * Test: nested
 */
function nested() {
    var [e, {x:f, g}] = [9, {x:10}];
    var {h, x:[i]} = {h:11, x:[12]};
    return e === 9 && f === 10 && g === undefined
      && h === 11 && i === 12;
}

/*
 * Test: in parameters
 */
function inparameters() {
    return (function({a, x:b, y:e}, [c, d]) {
      return a === 1 && b === 2 && c === 3 &&
        d === 4 && e === undefined;
    }({a:1, x:2}, [3, 4]));
}

/*
 * Test: in parameters, new Function() support
 */
function inparameters,newFunctionsupport() {
    return new Function("{a, x:b, y:e}","[c, d]",
      "return a === 1 && b === 2 && c === 3 && "
      + "d === 4 && e === undefined;"
    )({a:1, x:2}, [3, 4]);
}

/*
 * Test: in parameters, function 'length' property
 */
function inparameters,functionlengthproperty() {
    return function({a, b}, [c, d]){}.length === 2;
}

/*
 * Test: in for-in loop heads
 */
function inforinloopheads() {
    for(var [i, j, k] in { qux: 1 }) {
      return i === "q" && j === "u" && k === "x";
    }
}

/*
 * Test: in for-of loop heads
 */
function inforofloopheads() {
    for(var [i, j, k] of [[1,2,3]]) {
      return i === 1 && j === 2 && k === 3;
    }
}

/*
 * Test: rest
 */
function rest() {
    var [a, ...b] = [3, 4, 5];
    var [c, ...d] = [6];
    return a === 3 && b instanceof Array && (b + "") === "4,5" &&
       c === 6 && d instanceof Array && d.length === 0;
}

/*
 * Test: nested rest
 */
function nestedrest() {
    var a = [1, 2, 3], first, last;
    [first, ...[a[2], last]] = a;
    return first === 1 && last === 3 && (a + "") === "1,2,2";
}

/*
 * Test: defaults
 */
function defaults() {
    var {a = 1, b = 0, c = 3} = {b:2, c:undefined};
    return a === 1 && b === 2 && c === 3;
}

/*
 * Test: defaults in parameters
 */
function defaultsinparameters() {
    return (function({a = 1, b = 0, c = 3, x:d = 0, y:e = 5, z:f}) {
      return a === 1 && b === 2 && c === 3 && d === 4 &&
        e === 5 && f === undefined;
    }({b:2, c:undefined, x:4}));
}

/*
 * Test: defaults, let temporal dead zone
 */
function defaults,lettemporaldeadzone() {
    var {a, b = 2} = {a:1};
    try {
      eval("let {c = c} = {};");
      return false;
    } catch(e){}
    try {
      eval("let {c = d, d} = {d:1};");
      return false;
    } catch(e){}
    return a === 1 && b === 2;
}

/*
 * Test: defaults in parameters, separate scope
 */
function defaultsinparameters,separatescope() {
    return (function({a=function(){
      return typeof b === 'undefined';
    }}){
      var b = 1;
      return a();
    }({}));
}

/*
 * Test: defaults in parameters, new Function() support
 */
function defaultsinparameters,newFunctionsupport() {
    return new Function("{a = 1, b = 0, c = 3, x:d = 0, y:e = 5, z:f}",
      "return a === 1 && b === 2 && c === 3 && d === 4 && "
      + "e === 5 && f === undefined;"
    )({b:2, c:undefined, x:4});
}
