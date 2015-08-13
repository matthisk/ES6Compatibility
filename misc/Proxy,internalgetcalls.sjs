/* Name: Proxy, internal 'get' calls
 * Category: misc
 * Significance: tiny
 * Link: http://www.ecma-international.org/ecma-262/6.0/#sec-proxy-object-internal-methods-and-internal-slots
 */

/*
 * Test: ToPrimitive
 */
function() {
    // ToPrimitive -> Get -> [[Get]]
    var get = [];
    var p = new Proxy({toString:Function()}, { get: function(o, k) { get.push(k); return o[k]; }});
    p + 3;
    return get[0] === Symbol.toPrimitive && get.slice(1) + '' === "valueOf,toString";
}

/*
 * Test: CreateListFromArrayLike
 */
function() {
    // CreateListFromArrayLike -> Get -> [[Get]]
    var get = [];
    var p = new Proxy({length:2, 0:0, 1:0}, { get: function(o, k) { get.push(k); return o[k]; }});
    Function.prototype.apply({}, p);
    return get + '' === "length,0,1";
}

/*
 * Test: instanceof operator
 */
function() {
    // InstanceofOperator -> GetMethod -> GetV -> [[Get]]
    // InstanceofOperator -> OrdinaryHasInstance -> Get -> [[Get]]
    var get = [];
    var p = new Proxy(Function(), { get: function(o, k) { get.push(k); return o[k]; }});
    ({}) instanceof p;
    return get[0] === Symbol.hasInstance && get.slice(1) + '' === "prototype";
}

/*
 * Test: HasBinding
 */
function() {
    // HasBinding -> Get -> [[Get]]
    var get = [];
    var p = new Proxy({foo:1}, { get: function(o, k) { get.push(k); return o[k]; }});
    p[Symbol.unscopables] = p;
    with(p) {
      typeof foo;
    }
    return get[0] === Symbol.unscopables && get.slice(1) + '' === "foo";
}

/*
 * Test: CreateDynamicFunction
 */
function() {
    // CreateDynamicFunction -> GetPrototypeFromConstructor -> Get -> [[Get]]
    var get = [];
    var p = new Proxy(Function, { get: function(o, k) { get.push(k); return o[k]; }});
    new p;
    return get + '' === "prototype";
}

/*
 * Test: ClassDefinitionEvaluation
 */
function() {
    // ClassDefinitionEvaluation -> Get -> [[Get]]
    var get = [];
    var p = new Proxy(Function(), { get: function(o, k) { get.push(k); return o[k]; }});
    class C extends p {}
    return get + '' === "prototype";
}

/*
 * Test: IteratorComplete, IteratorValue
 */
function() {
    // IteratorComplete -> Get -> [[Get]]
    // IteratorValue -> Get -> [[Get]]
    var get = [];
    var iterable = {};
    iterable[Symbol.iterator] = function() {
      return {
        next: function() {
          return new Proxy({ value: 2, done: false }, { get: function(o, k) { get.push(k); return o[k]; }});
        }
      };
    }
    var i = 0;
    for(var e of iterable) {
      if (++i >= 2) break;
    }
    return get + '' === "done,value,done,value";
}

/*
 * Test: ToPropertyDescriptor
 */
function() {
    // ToPropertyDescriptor -> Get -> [[Get]]
    var get = [];
    var p = new Proxy({
        enumerable: true, configurable: true, value: true,
        writable: true, get: Function(), set: Function()
      }, { get: function(o, k) { get.push(k); return o[k]; }});
    try {
      // This will throw, since it will have true for both "get" and "value",
      // but not before performing a Get on every property.
      Object.defineProperty({}, "foo", p);
    } catch(e) {
      return get + '' === "enumerable,configurable,value,writable,get,set";
    }
}

/*
 * Test: Object.assign
 */
function() {
    // Object.assign -> Get -> [[Get]]
    var get = [];
    var p = new Proxy({foo:1, bar:2}, { get: function(o, k) { get.push(k); return o[k]; }});
    Object.assign({}, p);
    return get + '' === "foo,bar";
}

/*
 * Test: Object.defineProperties
 */
function() {
    // Object.defineProperties -> Get -> [[Get]]
    var get = [];
    var p = new Proxy({foo:{}, bar:{}}, { get: function(o, k) { get.push(k); return o[k]; }});
    Object.defineProperties({}, p);
    return get + '' === "foo,bar";
}

/*
 * Test: Function.prototype.bind
 */
function() {
    // Function.prototype.bind -> Get -> [[Get]]
    var get = [];
    var p = new Proxy(Function(), { get: function(o, k) { get.push(k); return o[k]; }});
    Function.prototype.bind.call(p);
    return get + '' === "length,name";
}

/*
 * Test: Error.prototype.toString
 */
function() {
    // Error.prototype.toString -> Get -> [[Get]]
    var get = [];
    var p = new Proxy({}, { get: function(o, k) { get.push(k); return o[k]; }});
    Error.prototype.toString.call(p);
    return get + '' === "name,message";
}

/*
 * Test: String.raw
 */
function() {
    // String.raw -> Get -> [[Get]]
    var get = [];
    var raw = new Proxy({length: 2, 0: '', 1: ''}, { get: function(o, k) { get.push(k); return o[k]; }});
    var p = new Proxy({raw: raw}, { get: function(o, k) { get.push(k); return o[k]; }});
    String.raw(p);
    return get + '' === "raw,length,0,1";
}

/*
 * Test: RegExp constructor
 */
function() {
    // RegExp -> Get -> [[Get]]
    var get = [];
    var re = { constructor: null };
    re[Symbol.match] = true;
    var p = new Proxy(re, { get: function(o, k) { get.push(k); return o[k]; }});
    RegExp(p);
    return get[0] === Symbol.match && get.slice(1) + '' === "constructor,source,flags";
}

/*
 * Test: RegExp.prototype.flags
 */
function() {
    // RegExp.prototype.flags -> Get -> [[Get]]
    var get = [];
    var p = new Proxy({}, { get: function(o, k) { get.push(k); return o[k]; }});
    Object.getOwnPropertyDescriptor(RegExp.prototype, 'flags').get.call(p);
    return get + '' === "global,ignoreCase,multiline,unicode,sticky";
}

/*
 * Test: RegExp.prototype.test
 */
function() {
    // RegExp.prototype.test -> RegExpExec -> Get -> [[Get]]
    var get = [];
    var p = new Proxy({ exec: function() { return null; } }, { get: function(o, k) { get.push(k); return o[k]; }});
    RegExp.prototype.test.call(p);
    return get + '' === "exec";
}

/*
 * Test: RegExp.prototype[Symbol.match]
 */
function() {
    // RegExp.prototype[Symbol.match] -> Get -> [[Get]]
    var get = [];
    var p = new Proxy({ exec: function() { return null; } }, { get: function(o, k) { get.push(k); return o[k]; }});
    RegExp.prototype[Symbol.match].call(p);
    p.global = true;
    RegExp.prototype[Symbol.match].call(p);
    return get + '' === "global,exec,global,unicode,exec";
}

/*
 * Test: RegExp.prototype[Symbol.replace]
 */
function() {
    // RegExp.prototype[Symbol.replace] -> Get -> [[Get]]
    var get = [];
    var p = new Proxy({ exec: function() { return null; } }, { get: function(o, k) { get.push(k); return o[k]; }});
    RegExp.prototype[Symbol.replace].call(p);
    p.global = true;
    RegExp.prototype[Symbol.replace].call(p);
    return get + '' === "global,exec,global,unicode,exec";
}

/*
 * Test: RegExp.prototype[Symbol.search]
 */
function() {
    // RegExp.prototype[Symbol.search] -> Get -> [[Get]]
    var get = [];
    var p = new Proxy({ exec: function() { return null; } }, { get: function(o, k) { get.push(k); return o[k]; }});
    RegExp.prototype[Symbol.search].call(p);
    return get + '' === "lastIndex,exec";
}

/*
 * Test: RegExp.prototype[Symbol.split]
 */
function() {
    // RegExp.prototype[Symbol.split] -> Get -> [[Get]]
    var get = [];
    var constructor = Function();
    constructor[Symbol.species] = Object;
    var p = new Proxy({ constructor: constructor, flags: '', exec: function() { return null; } }, { get: function(o, k) { get.push(k); return o[k]; }});
    RegExp.prototype[Symbol.split].call(p, "");
    return get + '' === "constructor,flags,exec";
}

/*
 * Test: Array.from
 */
function() {
    // Array.from -> Get -> [[Get]]
    var get = [];
    var p = new Proxy({length: 2, 0: '', 1: ''}, { get: function(o, k) { get.push(k); return o[k]; }});
    Array.from(p);
    return get[0] === Symbol.iterator && get.slice(1) + '' === "length,0,1";
}

/*
 * Test: Array.prototype.concat
 */
function() {
    // Array.prototype.concat -> Get -> [[Get]]
    var get = [];
    var arr = [1];
    arr.constructor = undefined;
    var p = new Proxy(arr, { get: function(o, k) { get.push(k); return o[k]; }});
    Array.prototype.concat.call(p,p);
    return get[0] === "constructor"
      && get[1] === Symbol.isConcatSpreadable
      && get[2] === "length"
      && get[3] === "0"
      && get[4] === get[1] && get[5] === get[2] && get[6] === get[3]
      && get.length === 7;
}

/*
 * Test: Array.prototype iteration methods
 */
function() {
    // Array.prototype methods -> Get -> [[Get]]
    var methods = ['copyWithin', 'every', 'fill', 'filter', 'find', 'findIndex', 'forEach',
      'indexOf', 'join', 'lastIndexOf', 'map', 'reduce', 'reduceRight', 'some'];
    var get;
    var p = new Proxy({length: 2, 0: '', 1: ''}, { get: function(o, k) { get.push(k); return o[k]; }});
    for(var i = 0; i < methods.length; i+=1) {
      get = [];
      Array.prototype[methods[i]].call(p, Function());
      if (get + '' !== (
        methods[i] === 'fill' ? "length" :
        methods[i] === 'every' ? "length,0" :
        methods[i] === 'lastIndexOf' || methods[i] === 'reduceRight' ? "length,1,0" :
        "length,0,1"
      )) {
        return false;
      }
    }
    return true;
}

/*
 * Test: Array.prototype.pop
 */
function() {
    // Array.prototype.pop -> Get -> [[Get]]
    var get = [];
    var p = new Proxy([0,1,2,3], { get: function(o, k) { get.push(k); return o[k]; }});
    Array.prototype.pop.call(p);
    return get + '' === "length,3";
}

/*
 * Test: Array.prototype.reverse
 */
function() {
    // Array.prototype.reverse -> Get -> [[Get]]
    var get = [];
    var p = new Proxy([0,,2,,4,,], { get: function(o, k) { get.push(k); return o[k]; }});
    Array.prototype.reverse.call(p);
    return get + '' === "length,0,4,2";
}

/*
 * Test: Array.prototype.shift
 */
function() {
    // Array.prototype.shift -> Get -> [[Get]]
    var get = [];
    var p = new Proxy([0,1,2,3], { get: function(o, k) { get.push(k); return o[k]; }});
    Array.prototype.shift.call(p);
    return get + '' === "length,0,1,2,3";
}

/*
 * Test: Array.prototype.splice
 */
function() {
    // Array.prototype.splice -> Get -> [[Get]]
    var get = [];
    var p = new Proxy([0,1,2,3], { get: function(o, k) { get.push(k); return o[k]; }});
    Array.prototype.splice.call(p,1,1);
    Array.prototype.splice.call(p,1,0,1);
    return get + '' === "length,constructor,1,2,3,length,constructor,2,1";
}

/*
 * Test: Array.prototype.toString
 */
function() {
    // Array.prototype.toString -> Get -> [[Get]]
    var get = [];
    var p = new Proxy({ join:Function() }, { get: function(o, k) { get.push(k); return o[k]; }});
    Array.prototype.toString.call(p);
    return get + '' === "join";
}

/*
 * Test: JSON.stringify
 */
function() {
    // JSON.stringify -> Get -> [[Get]]
    var get = [];
    var p = new Proxy({}, { get: function(o, k) { get.push(k); return o[k]; }});
    JSON.stringify(p);
    return get + '' === "toJSON";
}

/*
 * Test: Promise resolve functions
 */
function() {
    // Promise resolve functions -> Get -> [[Get]]
    var get = [];
    var p = new Proxy({}, { get: function(o, k) { get.push(k); return o[k]; }});
    new Promise(function(resolve){ resolve(p); });
    return get + '' === "then";
}

/*
 * Test: String.prototype.match
 */
function() {
    // String.prototype.match -> Get -> [[Get]]
    var get = [];
    var proxied = {};
    proxied[Symbol.toPrimitive] = Function();
    var p = new Proxy(proxied, { get: function(o, k) { get.push(k); return o[k]; }});
    "".match(p);
    return get[0] === Symbol.match && get[1] === Symbol.toPrimitive && get.length === 2;
}

/*
 * Test: String.prototype.replace
 */
function() {
    // String.prototype.replace functions -> Get -> [[Get]]
    var get = [];
    var proxied = {};
    proxied[Symbol.toPrimitive] = Function();
    var p = new Proxy(proxied, { get: function(o, k) { get.push(k); return o[k]; }});
    "".replace(p);
    return get[0] === Symbol.replace && get[1] === Symbol.toPrimitive && get.length === 2;
}

/*
 * Test: String.prototype.search
 */
function() {
    // String.prototype.search functions -> Get -> [[Get]]
    var get = [];
    var proxied = {};
    proxied[Symbol.toPrimitive] = Function();
    var p = new Proxy(proxied, { get: function(o, k) { get.push(k); return o[k]; }});
    "".search(p);
    return get[0] === Symbol.search && get[1] === Symbol.toPrimitive && get.length === 2;
}

/*
 * Test: String.prototype.split
 */
function() {
    // String.prototype.split functions -> Get -> [[Get]]
    var get = [];
    var proxied = {};
    proxied[Symbol.toPrimitive] = Function();
    var p = new Proxy(proxied, { get: function(o, k) { get.push(k); return o[k]; }});
    "".split(p);
    return get[0] === Symbol.split && get[1] === Symbol.toPrimitive && get.length === 2;
}

/*
 * Test: Date.prototype.toJSON
 */
function() {
    // Date.prototype.toJSON -> ToPrimitive -> Get -> [[Get]]
    // Date.prototype.toJSON -> Invoke -> GetMethod -> GetV -> [[Get]]
    var get = [];
    var p = new Proxy({toString:Function(),toISOString:Function()}, { get: function(o, k) { get.push(k); return o[k]; }});
    Date.prototype.toJSON.call(p);
    return get[0] === Symbol.toPrimitive && get.slice(1) + '' === "valueOf,toString,toISOString";
}

