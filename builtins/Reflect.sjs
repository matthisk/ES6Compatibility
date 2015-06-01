/* Name: Reflect
 * Category: built-ins
 * Significance: medium
 * Link: https://people.mozilla.org/~jorendorff/es6-draft.html#sec-reflection
 */

/*
 * Test: Reflect.get
 */
function() {
    return Reflect.get({ qux: 987 }, "qux") === 987;
}

/*
 * Test: Reflect.set
 */
function() {
    var obj = {};
    Reflect.set(obj, "quux", 654);
    return obj.quux === 654;
}

/*
 * Test: Reflect.has
 */
function() {
    return Reflect.has({ qux: 987 }, "qux");
}

/*
 * Test: Reflect.deleteProperty
 */
function() {
    var obj = { bar: 456 };
    Reflect.deleteProperty(obj, "bar");
    return !("bar" in obj);
}

/*
 * Test: Reflect.getOwnPropertyDescriptor
 */
function() {
    var obj = { baz: 789 };
    var desc = Reflect.getOwnPropertyDescriptor(obj, "baz");
    return desc.value === 789 &&
      desc.configurable && desc.writable && desc.enumerable;
}

/*
 * Test: Reflect.defineProperty
 */
function() {
    var obj = {};
    Reflect.defineProperty(obj, "foo", { value: 123 });
    return obj.foo === 123;
}

/*
 * Test: Reflect.getPrototypeOf
 */
function() {
    return Reflect.getPrototypeOf([]) === Array.prototype;
}

/*
 * Test: Reflect.setPrototypeOf
 */
function() {
    var obj = {};
    Reflect.setPrototypeOf(obj, Array.prototype);
    return obj instanceof Array;
}

/*
 * Test: Reflect.isExtensible
 */
function() {
    return Reflect.isExtensible({}) &&
      !Reflect.isExtensible(Object.preventExtensions({}));
}

/*
 * Test: Reflect.preventExtensions
 */
function() {
    var obj = {};
    Reflect.preventExtensions(obj);
    return !Object.isExtensible(obj);
}

/*
 * Test: Reflect.enumerate
 */
function() {
    var obj = { foo: 1, bar: 2 };
    var iterator = Reflect.enumerate(obj);
    var passed = 1;
    if (typeof Symbol === 'function' && 'iterator' in Symbol) {
      passed &= Symbol.iterator in iterator;
    }
    var item = iterator.next();
    passed &= item.value === "foo" && item.done === false;
    item = iterator.next();
    passed &= item.value === "bar" && item.done === false;
    item = iterator.next();
    passed &= item.value === undefined && item.done === true;
    return passed === 1;
}

/*
 * Test: Reflect.ownKeys
 */
function() {
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
function() {
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
function() {
    return Reflect.apply(Array.prototype.push, [1,2], [3,4,5]) === 5;
}

/*
 * Test: Reflect.construct
 */
function() {
    return Reflect.construct(function(a, b, c) {
      this.qux = a + b + c;
    }, ["foo", "bar", "baz"]).qux === "foobarbaz";
}

/*
 * Test: Reflect.construct, new.target
 */
function() {
    return Reflect.construct(function(a, b, c) {
      if (new.target === Object) {
        this.qux = a + b + c;
      }
    }, ["foo", "bar", "baz"], Object).qux === "foobarbaz";
}

