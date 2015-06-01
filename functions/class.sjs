/* Name: class
 * Category: functions
 * Significance: large
 * Link: https://people.mozilla.org/~jorendorff/es6-draft.html#sec-class-definitions
 *//*
 * Test: class statement
 */
function classstatement() {
    class C {}
    return typeof C === "function";
}

/*
 * Test: is block-scoped
 */
function isblockscoped() {
    class C {}
    var c1 = C;
    {
      class C {}
      var c2 = C;
    }
    return C === c1;
}

/*
 * Test: class expression
 */
function classexpression() {
    return typeof class C {} === "function";
}

/*
 * Test: anonymous class
 */
function anonymousclass() {
    return typeof class {} === "function";
}

/*
 * Test: constructor
 */
function constructor() {
    class C {
      constructor() { this.x = 1; }
    }
    return C.prototype.constructor === C
      && new C().x === 1;
}

/*
 * Test: prototype methods
 */
function prototypemethods() {
    class C {
      method() { return 2; }
    }
    return typeof C.prototype.method === "function"
      && new C().method() === 2;
}

/*
 * Test: string-keyed methods
 */
function stringkeyedmethods() {
    class C {
      "foo bar"() { return 2; }
    }
    return typeof C.prototype["foo bar"] === "function"
      && new C()["foo bar"]() === 2;
}

/*
 * Test: computed prototype methods
 */
function computedprototypemethods() {
    var foo = "method";
    class C {
      [foo]() { return 2; }
    }
    return typeof C.prototype.method === "function"
      && new C().method() === 2;
}

/*
 * Test: static methods
 */
function staticmethods() {
    class C {
      static method() { return 3; }
    }
    return typeof C.method === "function"
      && C.method() === 3;
}

/*
 * Test: computed static methods
 */
function computedstaticmethods() {
    var foo = "method";
    class C {
      static [foo]() { return 3; }
    }
    return typeof C.method === "function"
      && C.method() === 3;
}

/*
 * Test: accessor properties
 */
function accessorproperties() {
    var baz = false;
    class C {
      get foo() { return "foo"; }
      set bar(x) { baz = x; }
    }
    new C().bar = true;
    return new C().foo === "foo" && baz;
}

/*
 * Test: computed accessor properties
 */
function computedaccessorproperties() {
    var garply = "foo", grault = "bar", baz = false;
    class C {
      get [garply]() { return "foo"; }
      set [grault](x) { baz = x; }
    }
    new C().bar = true;
    return new C().foo === "foo" && baz;
}

/*
 * Test: static accessor properties
 */
function staticaccessorproperties() {
    var baz = false;
    class C {
      static get foo() { return "foo"; }
      static set bar(x) { baz = x; }
    }
    C.bar = true;
    return C.foo === "foo" && baz;
}

/*
 * Test: computed static accessor properties
 */
function computedstaticaccessorproperties() {
    var garply = "foo", grault = "bar", baz = false;
    class C {
      static get [garply]() { return "foo"; }
      static set [grault](x) { baz = x; }
    }
    C.bar = true;
    return C.foo === "foo" && baz;
}

/*
 * Test: class name is lexically scoped
 */
function classnameislexicallyscoped() {
    class C {
      method() { return typeof C === "function"; }
    }
    var M = C.prototype.method;
    C = undefined;
    return C === undefined && M();
}

/*
 * Test: computed names, temporal dead zone
 */
function computednames,temporaldeadzone() {
    try {
      var B = class C {
        [C](){}
      }
    } catch(e) {
      return true;
    }
}

/*
 * Test: methods aren't enumerable
 */
function methodsarentenumerable() {
    class C {
      foo() {}
      static bar() {}
    }
    return !C.prototype.propertyIsEnumerable("foo") && !C.propertyIsEnumerable("bar");
}

/*
 * Test: implicit strict mode
 */
function implicitstrictmode() {
    class C {
      static method() { return this === undefined; }
    }
    return (0,C.method)();
}

/*
 * Test: constructor requires new
 */
function constructorrequiresnew() {
    class C {}
    try {
      C();
    }
    catch(e) {
      return true;
    }
}

/*
 * Test: extends
 */
function extends() {
    class B {}
    class C extends B {}
    return new C() instanceof B
      && B.isPrototypeOf(C)
      && B.prototype.isPrototypeOf(C.prototype);
}

/*
 * Test: extends expressions
 */
function extendsexpressions() {
    var B;
    class C extends (B = class {}) {}
    return new C() instanceof B
      && B.isPrototypeOf(C)
      && B.prototype.isPrototypeOf(C.prototype);
}

/*
 * Test: extends null
 */
function extendsnull() {
    class C extends null {
      constructor() { return Object.create(null); }
    }
    var c = new C();
    return !(c instanceof Object)
      && Function.prototype.isPrototypeOf(C)
      && Object.getPrototypeOf(C.prototype) === null;
}

/*
 * Test: new.target
 */
function newtarget() {
    var passed = false;
    class A {
      constructor() {
        passed = new.target === B;
      }
    }
    class B extends A {}
    new B();
    (function() {
      passed &= new.target === undefined;
    }());
    return passed;
}

