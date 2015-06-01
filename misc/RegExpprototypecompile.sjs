/* Name: miscellaneous
 * Category: misc
 * Significance: small
 * Link: https://people.mozilla.org/~jorendorff/es6-draft.html#sec-additions-and-changes-that-introduce-incompatibilities-with-prior-editions
 *//*
 * Test: no escaped reserved words as identifiers
 */
function noescapedreservedwordsasidentifiers() {
    var \u0061;
    try {
      eval('var v\\u0061r');
    } catch(e) {
      return true;
    }
}

/*
 * Test: duplicate property names in strict mode
 */
function duplicatepropertynamesinstrictmode() {
    'use strict';
    return this === undefined && ({ a:1, a:1 }).a === 1;
}

/*
 * Test: no semicolon needed after do-while
 */
function nosemicolonneededafterdowhile() {
    do {} while (false) return true;
}

/*
 * Test: no assignments allowed in for-in head
 */
function noassignmentsallowedinforinhead() {
    try {
      eval('for (var i = 0 in {}) {}');
    }
    catch(e) {
      return true;
    }
}

/*
 * Test: accessors aren't constructors
 */
function accessorsarentconstructors() {
    try {
      new (Object.getOwnPropertyDescriptor({get a(){}}, 'a')).get;
    } catch(e) {
      return true;
    }
}

/*
 * Test: Invalid Date
 */
function InvalidDate() {
    return new Date(NaN) + "" === "Invalid Date";
}

/*
 * Test: RegExp constructor can alter flags
 */
function RegExpconstructorcanalterflags() {
    return new RegExp(/./im, "g").global === true;
}

/*
 * Test: built-in prototypes are not instances
 */
function builtinprototypesarenotinstances() {
    try {
      Boolean.prototype.valueOf(); return false;
    } catch(e) {}
    try {
      Number.prototype.valueOf(); return false;
    } catch(e) {}
    try {
      String.prototype.toString(); return false;
    } catch(e) {}
    try {
      RegExp.prototype.source; return false;
    } catch(e) {}
    try {
      Date.prototype.valueOf(); return false;
    } catch(e) {}
    return true;
}

return {
        get: function() { result += key; return true; },
        set: Object,
        enumerable: true
      };
    };
    var result = '';
    var obj = Object.defineProperties({}, {
      2:    f(2),
      0:    f(0),
      1:    f(1),
      ' ':  f(' '),
      9:    f(9),
      D:    f('D'),
      B:    f('B'),
      '-1': f('-1'),
    });
    Object.defineProperty(obj,'A',f('A')); 
    Object.defineProperty(obj,'3',f('3'));
    Object.defineProperty(obj,'C',f('C')); 
    Object.defineProperty(obj,'4',f('4'));
    delete obj[2];
    obj[2] = true;
    
    Object.assign({}, obj);
    
    return result === "012349 DB-1AC";
}

/*
 * Test: JSON.stringify
 */
function JSONstringify() {
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
    
    return JSON.stringify(obj) ===
      '{"0":true,"1":true,"2":true,"3":true,"4":true,"9":true," ":true,"D":true,"B":true,"-1":true,"A":true,"C":true}';
}

/*
 * Test: JSON.parse
 */
function JSONparse() {
    var result = '';
    JSON.parse(
      '{"0":true,"1":true,"2":true,"3":true,"4":true,"9":true," ":true,"D":true,"B":true,"-1":true,"A":true,"C":true}',
      function reviver(k,v) {
        result += k;
        return v;
      }
    );
    return result === "012349 DB-1AC";
}

