/* Name: prototype of bound functions
 * Category: misc
 * Significance: tiny
 * Link: http://www.ecma-international.org/ecma-262/6.0/#sec-boundfunctioncreate
 */

/*
 * Test: basic functions
 */
function() {
      function correctProtoBound(proto) {
        var f = function(){};
        if (Object.setPrototypeOf) {
          Object.setPrototypeOf(f, proto);
        }
        else {
          f.__proto__ = proto;
        }
        var boundF = Function.prototype.bind.call(f, null);
        return Object.getPrototypeOf(boundF) === proto;
      }
      return correctProtoBound(Function.prototype)
        && correctProtoBound({})
        && correctProtoBound(null);
}

/*
 * Test: generator functions
 */
function() {
      function correctProtoBound(proto) {
        var f = function*(){};
        if (Object.setPrototypeOf) {
          Object.setPrototypeOf(f, proto);
        }
        else {
          f.__proto__ = proto;
        }
        var boundF = Function.prototype.bind.call(f, null);
        return Object.getPrototypeOf(boundF) === proto;
      }
      return correctProtoBound(Function.prototype)
        && correctProtoBound({})
        && correctProtoBound(null);
}

/*
 * Test: arrow functions
 */
function() {
      function correctProtoBound(proto) {
        var f = ()=>5;
        if (Object.setPrototypeOf) {
          Object.setPrototypeOf(f, proto);
        }
        else {
          f.__proto__ = proto;
        }
        var boundF = Function.prototype.bind.call(f, null);
        return Object.getPrototypeOf(boundF) === proto;
      }
      return correctProtoBound(Function.prototype)
        && correctProtoBound({})
        && correctProtoBound(null);
}

/*
 * Test: classes
 */
function() {
      function correctProtoBound(proto) {
        class C {}
        if (Object.setPrototypeOf) {
          Object.setPrototypeOf(C, proto);
        }
        else {
          C.__proto__ = proto;
        }
        var boundF = Function.prototype.bind.call(C, null);
        return Object.getPrototypeOf(boundF) === proto;
      }
      return correctProtoBound(Function.prototype)
        && correctProtoBound({})
        && correctProtoBound(null);
}

/*
 * Test: subclasses
 */
function() {
      function correctProtoBound(superclass) {
        class C extends superclass {
          constructor() {
            return Object.create(null);
          }
        }
        var boundF = Function.prototype.bind.call(C, null);
        return Object.getPrototypeOf(boundF) === Object.getPrototypeOf(C);
      }
      return correctProtoBound(function(){})
        && correctProtoBound(Array)
        && correctProtoBound(null);
}

