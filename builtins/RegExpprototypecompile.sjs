/* Name: well-known symbols
 * Category: built-ins
 * Significance: medium
 * Link: http://people.mozilla.org/~jorendorff/es6-draft.html#sec-well-known-symbols
 *//*
 * Test: Symbol.hasInstance
 */
function SymbolhasInstance() {
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
function SymbolisConcatSpreadable() {
    var a = [], b = [];
    b[Symbol.isConcatSpreadable] = false;
    a = a.concat(b);
    return a[0] === b;
}

/*
 * Test: Symbol.iterator
 */
function Symboliterator() {
    var a = 0, b = {};
    b[Symbol.iterator] = function() {
      return {
        next: function() {
          return {
            done: a++ === 1,
            value: "foo"
          };
        }
      };
    };
    var c;
    for (c of b) {}
    return c === "foo";
}

/*
 * Test: Symbol.species
 */
function Symbolspecies() {
    return RegExp[Symbol.species] === RegExp
      && Array[Symbol.species] === Array
      && !(Symbol.species in Object);
}

/*
 * Test: Symbol.toPrimitive
 */
function SymboltoPrimitive() {
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
function SymboltoStringTag() {
    var a = {};
    a[Symbol.toStringTag] = "foo";
    return (a + "") === "[object foo]";
}

/*
 * Test: Symbol.unscopables
 */
function Symbolunscopables() {
    var a = { foo: 1, bar: 2 };
    a[Symbol.unscopables] = { bar: true };
    with (a) {
      return foo === 1 && typeof bar === "undefined";
    }
}

ct.valueOf() === symbol;
}

/*
 * Test: global symbol registry
 */
function globalsymbolregistry() {
    var symbol = Symbol.for('foo');
    return Symbol.for('foo') === symbol &&
       Symbol.keyFor(symbol) === 'foo';
}


    function check() {
      if (score === 2) asyncTestPassed();
    }
}

one === true;
    return passed === 1;
}

/*
 * Test: Reflect.ownKeys
 */
function ReflectownKeys() {
    var obj = {
      2:    true,
      0:    true,
      1:    true,
      ' ':  true,
      9:    true,
      D:    true,
      B:    true,
      '-1': true,
    };
    obj.A = true;
    obj[3] = true;
    Object.defineProperty(obj, 'C', { value: true, enumerable: true });
    Object.defineProperty(obj, '4', { value: true, enumerable: true });
    delete obj[2];
    obj[2] = true;
    
    return Reflect.ownKeys(obj).join('') === "012349 DB-1AC";
}

/*
 * Test: Reflect.ownKeys, symbol order
 */
function ReflectownKeys,symbolorder() {
    var sym1 = Symbol(), sym2 = Symbol(), sym3 = Symbol();
    var obj = {
      1:    true,
      A:    true,
    };
    obj.B = true;
    obj[sym1] = true;
    obj[2] = true;
    obj[sym2] = true;
    Object.defineProperty(obj, 'C', { value: true, enumerable: true });
    Object.defineProperty(obj, sym3,{ value: true, enumerable: true });
    Object.defineProperty(obj, 'D', { value: true, enumerable: true });
    
    var result = Reflect.ownKeys(obj);
    var l = result.length;
    return result[l-3] === sym1 && result[l-2] === sym2 && result[l-1] === sym3;
}

/*
 * Test: Reflect.apply
 */
function Reflectapply() {
    return Reflect.apply(Array.prototype.push, [1,2], [3,4,5]) === 5;
}

/*
 * Test: Reflect.construct
 */
function Reflectconstruct() {
    return Reflect.construct(function(a, b, c) {
      this.qux = a + b + c;
    }, ["foo", "bar", "baz"]).qux === "foobarbaz";
}

/*
 * Test: Reflect.construct, new.target
 */
function Reflectconstruct,newtarget() {
    return Reflect.construct(function(a, b, c) {
      if (new.target === Object) {
        this.qux = a + b + c;
      }
    }, ["foo", "bar", "baz"], Object).qux === "foobarbaz";
}

w Proxy(proxied, {
        isExtensible: function (t) {
          passed = t === proxied; return true;
        }
      })
    );
    return passed;
}

/*
 * Test: "preventExtensions" handler
 */
function preventExtensionshandler() {
    var proxied = {};
    var passed = false;
    Object.preventExtensions(
      new Proxy(proxied, {
        preventExtensions: function (t) {
          passed = t === proxied;
          return Object.preventExtensions(proxied);
        }
      })
    );
    return passed;
}

/*
 * Test: "enumerate" handler
 */
function enumeratehandler() {
    var proxied = {};
    var passed = false;
    for (var i in
      new Proxy(proxied, {
        enumerate: function (t) {
          passed = t === proxied;
          return {
            next: function(){ return { done: true, value: null };}
          };
        }
      })
    ) { }
    return passed;
}

/*
 * Test: "ownKeys" handler
 */
function ownKeyshandler() {
    var proxied = {};
    var passed = false;
    Object.keys(
      new Proxy(proxied, {
        ownKeys: function (t) {
          passed = t === proxied; return [];
        }
      })
    );
    return passed;
}

/*
 * Test: "apply" handler
 */
function applyhandler() {
    var proxied = function(){};
    var passed = false;
    var host = {
      method: new Proxy(proxied, {
        apply: function (t, thisArg, args) {
          passed = t === proxied && thisArg === host && args + "" === "foo,bar";
        }
      })
    };
    host.method("foo", "bar");
    return passed;
}

/*
 * Test: "construct" handler
 */
function constructhandler() {
    var proxied = function(){};
    var passed = false;
    new new Proxy(proxied, {
      construct: function (t, args) {
        passed = t === proxied && args + "" === "foo,bar";
        return {};
      }
    })("foo","bar");
    return passed;
}

/*
 * Test: Proxy.revocable
 */
function Proxyrevocable() {
    var obj = Proxy.revocable({}, { get: function() { return 5; } });
    var passed = (obj.proxy.foo === 5);
    obj.revoke();
    try {
      obj.proxy.foo;
    } catch(e) {
      passed &= e instanceof TypeError;
    }
    return passed;
}

/*
 * Test: Array.isArray support
 */
function ArrayisArraysupport() {
    return Array.isArray(new Proxy([], {}));
}

/*
 * Test: JSON.stringify support
 */
function JSONstringifysupport() {
    return JSON.stringify(new Proxy(['foo'], {})) === '["foo"]';
}

