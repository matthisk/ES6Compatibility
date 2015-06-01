/* Name: arrow functions
 * Category: functions
 * Significance: large
 * Link: https://people.mozilla.org/~jorendorff/es6-draft.html#sec-arrow-function-definitions
 *//*
 * Test: 0 parameters
 */
function 0parameters() {
    return (() => 5)() === 5;
}

/*
 * Test: 1 parameter, no brackets
 */
function 1parameter,nobrackets() {
    var b = x => x + "foo";
    return (b("fee fie foe ") === "fee fie foe foo");
}

/*
 * Test: multiple parameters
 */
function multipleparameters() {
    var c = (v, w, x, y, z) => "" + v + w + x + y + z;
    return (c(6, 5, 4, 3, 2) === "65432");
}

/*
 * Test: lexical "this" binding
 */
function lexicalthisbinding() {
    var d = { x : "bar", y : function() { return z => this.x + z; }}.y();
    var e = { x : "baz", y : d };
    return d("ley") === "barley" && e.y("ley") === "barley";
}

/*
 * Test: "this" unchanged by call or apply
 */
function thisunchangedbycallorapply() {
    var d = { x : "foo", y : function() { return () => this.x; }};
    var e = { x : "bar" };
    return d.y().call(e) === "foo" && d.y().apply(e) === "foo";
}

/*
 * Test: can't be bound, can be curried
 */
function cantbebound,canbecurried() {
    var d = { x : "bar", y : function() { return z => this.x + z; }};
    var e = { x : "baz" };
    return d.y().bind(e, "ley")() === "barley";
}

/*
 * Test: lexical "arguments" binding
 */
function lexicalargumentsbinding() {
    var f = (function() { return z => arguments[0]; }(5));
    return f(6) === 5;
}

/*
 * Test: no line break between params and <code>=></code>
 */
function nolinebreakbetweenparamsandcode/code() {
    return (() => {
      try { Function("x\n => 2")(); } catch(e) { return true; }
    })();
}

/*
 * Test: no "prototype" property
 */
function noprototypeproperty() {
    var a = () => 5;
    return !a.hasOwnProperty("prototype");
}

/*
 * Test: lexical "super" binding
 */
function lexicalsuperbinding() {
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
function lexicalnewtargetbinding() {
    function C() {
      return x => new.target;
    }
    return new C()() === C && C()() === undefined;
}

