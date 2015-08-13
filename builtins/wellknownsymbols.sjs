/* Name: well-known symbols
 * Category: built-ins
 * Significance: small
 * Link: http://www.ecma-international.org/ecma-262/6.0/#sec-well-known-symbols
 */

/*
 * Test: Symbol.hasInstance
 */
function() {
    var passed = false;
    var obj = { foo: true };
    var C = function(){};
    Object.defineProperty(C, Symbol.hasInstance, {
      value: function(inst) { passed = inst.foo; return false; }
    });
    obj instanceof C;
    return passed;
}

/*
 * Test: Symbol.isConcatSpreadable
 */
function() {
    var a = [], b = [];
    b[Symbol.isConcatSpreadable] = false;
    a = a.concat(b);
    return a[0] === b;
}

/*
 * Test: Symbol.iterator, existence
 */
function() {
    return "iterator" in Symbol;
}

/*
 * Test: Symbol.iterator, arguments object
 */
function() {
    return (function() {
      return typeof arguments[Symbol.iterator] === 'function'
        && Object.hasOwnProperty.call(arguments, Symbol.iterator);
    }());
}

/*
 * Test: Symbol.species, existence
 */
function() {
    return "species" in Symbol;
}

/*
 * Test: Symbol.species, Array.prototype.concat
 */
function() {
    var obj = [];
    obj.constructor = {};
    obj.constructor[Symbol.species] = function() {
        return { foo: 1 };
    };
    return Array.prototype.concat.call(obj, []).foo === 1;
}

/*
 * Test: Symbol.species, Array.prototype.filter
 */
function() {
    var obj = [];
    obj.constructor = {};
    obj.constructor[Symbol.species] = function() {
        return { foo: 1 };
    };
    return Array.prototype.filter.call(obj, Boolean).foo === 1;
}

/*
 * Test: Symbol.species, Array.prototype.map
 */
function() {
    var obj = [];
    obj.constructor = {};
    obj.constructor[Symbol.species] = function() {
        return { foo: 1 };
    };
    return Array.prototype.map.call(obj, Boolean).foo === 1;
}

/*
 * Test: Symbol.species, Array.prototype.slice
 */
function() {
    var obj = [];
    obj.constructor = {};
    obj.constructor[Symbol.species] = function() {
        return { foo: 1 };
    };
    return Array.prototype.slice.call(obj, 0).foo === 1;
}

/*
 * Test: Symbol.species, Array.prototype.splice
 */
function() {
    var obj = [];
    obj.constructor = {};
    obj.constructor[Symbol.species] = function() {
        return { foo: 1 };
    };
    return Array.prototype.splice.call(obj, 0).foo === 1;
}

/*
 * Test: Symbol.species, RegExp.prototype[Symbol.split]
 */
function() {
    var passed = false;
    var obj = { constructor: {} };
    obj[Symbol.split] = RegExp.prototype[Symbol.split];
    obj.constructor[Symbol.species] = function() {
      passed = true;
      return /./;
    };
    "".split(obj);
    return passed;
}

/*
 * Test: Symbol.match
 */
function() {
    var O = {};
    O[Symbol.match] = function(){
      return 42;
    };
    return ''.match(O) === 42;
}

/*
 * Test: Symbol.replace
 */
function() {
    var O = {};
    O[Symbol.replace] = function(){
      return 42;
    };
    return ''.replace(O) === 42;
}

/*
 * Test: Symbol.search
 */
function() {
    var O = {};
    O[Symbol.search] = function(){
      return 42;
    };
    return ''.search(O) === 42;
}

/*
 * Test: Symbol.split
 */
function() {
    var O = {};
    O[Symbol.split] = function(){
      return 42;
    };
    return ''.split(O) === 42;
}

/*
 * Test: Symbol.toPrimitive
 */
function() {
    var a = {}, b = {}, c = {};
    var passed = 0;
    a[Symbol.toPrimitive] = function(hint) { passed += hint === "number";  return 0; };
    b[Symbol.toPrimitive] = function(hint) { passed += hint === "string";  return 0; };
    c[Symbol.toPrimitive] = function(hint) { passed += hint === "default"; return 0; };

    a >= 0;
    b in {};
    c == 0;
    return passed === 3;
}

/*
 * Test: Symbol.toStringTag
 */
function() {
    var a = {};
    a[Symbol.toStringTag] = "foo";
    return (a + "") === "[object foo]";
}

/*
 * Test: Symbol.toStringTag, misc. built-ins
 */
function() {
    var s = Symbol.toStringTag;
    return Math[s] === "Math"
      && JSON[s] === "JSON";
}

/*
 * Test: Symbol.unscopables
 */
function() {
    var a = { foo: 1, bar: 2 };
    a[Symbol.unscopables] = { bar: true };
    with (a) {
      return foo === 1 && typeof bar === "undefined";
    }
}

