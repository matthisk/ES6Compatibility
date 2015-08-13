/* Name: arrow functions
 * Category: functions
 * Significance: large
 * Link: http://www.ecma-international.org/ecma-262/6.0/#sec-arrow-function-definitions
 */

/*
 * Test: 0 parameters
 */
function() {
    return (() => 5)() === 5;
}

/*
 * Test: 1 parameter, no brackets
 */
function() {
    var b = x => x + "foo";
    return (b("fee fie foe ") === "fee fie foe foo");
}

/*
 * Test: multiple parameters
 */
function() {
    var c = (v, w, x, y, z) => "" + v + w + x + y + z;
    return (c(6, 5, 4, 3, 2) === "65432");
}

/*
 * Test: lexical "this" binding
 */
function() {
    var d = { x : "bar", y : function() { return z => this.x + z; }}.y();
    var e = { x : "baz", y : d };
    return d("ley") === "barley" && e.y("ley") === "barley";
}

/*
 * Test: "this" unchanged by call or apply
 */
function() {
    var d = { x : "foo", y : function() { return () => this.x; }};
    var e = { x : "bar" };
    return d.y().call(e) === "foo" && d.y().apply(e) === "foo";
}

/*
 * Test: can't be bound, can be curried
 */
function() {
    var d = { x : "bar", y : function() { return z => this.x + z; }};
    var e = { x : "baz" };
    return d.y().bind(e, "ley")() === "barley";
}

/*
 * Test: lexical "arguments" binding
 */
function() {
    var f = (function() { return z => arguments[0]; }(5));
    return f(6) === 5;
}

/*
 * Test: no line break between params and <code>=></code>
 */
function() {
    return (() => {
      try { Function("x\n => 2")(); } catch(e) { return true; }
    })();
}

/*
 * Test: correct precedence
 */
function() {
    return (() => {
      try { Function("0 || () => 2")(); } catch(e) { return true; }
    })();
}

/*
 * Test: no "prototype" property
 */
function() {
    var a = () => 5;
    return !a.hasOwnProperty("prototype");
}

/*
 * Test: lexical "super" binding
 */
function() {
    class B {
      qux() {
        return "quux";
      }
    }
    class C extends B {
      baz() {
        return x => super.qux();
      }
    }
    var arrow = new C().baz();
    return arrow() === "quux";
}

/*
 * Test: lexical "new.target" binding
 */
function() {
    function C() {
      return x => new.target;
    }
    return new C()() === C && C()() === undefined;
}

