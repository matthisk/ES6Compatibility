/* Name: miscellaneous subclassables
 * Category: subclassing
 * Significance: small
 * Link: https://people.mozilla.org/~jorendorff/es6-draft.html#sec-boolean-constructor
 *//*
 * Test: Boolean is subclassable
 */
function Booleanissubclassable() {
    class C extends Boolean {}
    var c = new C(true);
    return c instanceof Boolean
      && c == true;
}

/*
 * Test: Number is subclassable
 */
function Numberissubclassable() {
    class C extends Number {}
    var c = new C(6);
    return c instanceof Number
      && +c === 6;
}

/*
 * Test: String is subclassable
 */
function Stringissubclassable() {
    class C extends String {}
    var c = new C("golly");
    return c instanceof String
      && c + '' === "golly"
      && c[0] === "g"
      && c.length === 5;
}

/*
 * Test: Map is subclassable
 */
function Mapissubclassable() {
    var key = {};
    class M extends Map {}
    var map = new M();

    map.set(key, 123);

    return map.has(key) && map.get(key) === 123;
}

/*
 * Test: Set is subclassable
 */
function Setissubclassable() {
    var obj = {};
    class S extends Set {}
    var set = new S();

    set.add(123);
    set.add(123);

    return set.has(123);
}

 new Promise(function(resolve)   { setTimeout(resolve,100,"bar"); }),
    ]);
    var rejects = P.all([
      new Promise(function(_, reject) { setTimeout(reject, 200,"baz"); }),
      new Promise(function(_, reject) { setTimeout(reject, 100,"qux"); }),
    ]);
    var score = +(fulfills instanceof P);
    fulfills.then(function(result) { score += (result + "" === "foo,bar"); check(); });
    rejects.catch(function(result) { score += (result === "qux"); check(); });

    function check() {
      if (score === 3) asyncTestPassed();
    }
}

/*
 * Test: Promise.race
 */
function Promiserace() {
    class P extends Promise {}
    var fulfills = P.race([
      new Promise(function(resolve)   { setTimeout(resolve,200,"foo"); }),
      new Promise(function(_, reject) { setTimeout(reject, 300,"bar"); }),
    ]);
    var rejects = P.race([
      new Promise(function(_, reject) { setTimeout(reject, 200,"baz"); }),
      new Promise(function(resolve)   { setTimeout(resolve,300,"qux"); }),
    ]);
    var score = +(fulfills instanceof P);
    fulfills.then(function(result) { score += (result === "foo"); check(); });
    rejects.catch(function(result) { score += (result === "baz"); check(); });

    function check() {
      if (score === 3) asyncTestPassed();
    }
}

