/* Name: Object.prototype.__proto__
 * Category: annex b
 * Significance: small
 * Link: http://people.mozilla.org/~jorendorff/es6-draft.html#sec-object.prototype.__proto__
 */

/*
 * Test: get prototype
 */
function() {
    var A = function(){};
    return (new A()).__proto__ === A.prototype;
}

/*
 * Test: set prototype
 */
function() {
    var o = {};
    o.__proto__ = Array.prototype;
    return o instanceof Array;
}

/*
 * Test: absent from Object.create(null)
 */
function() {
    var o = Object.create(null), p = {};
    o.__proto__ = p;
    return Object.getPrototypeOf(o) !== p;
}

/*
 * Test: present in hasOwnProperty()
 */
function() {
    return Object.prototype.hasOwnProperty('__proto__');
}

/*
 * Test: correct property descriptor
 */
function() {
    var desc = Object.getOwnPropertyDescriptor(Object.prototype,"__proto__");
    var A = function(){};

    return (desc
      && "get" in desc
      && "set" in desc
      && desc.configurable
      && !desc.enumerable);
}

/*
 * Test: present in Object.getOwnPropertyNames()
 */
function() {
    return Object.getOwnPropertyNames(Object.prototype).indexOf('__proto__') > -1;
}

