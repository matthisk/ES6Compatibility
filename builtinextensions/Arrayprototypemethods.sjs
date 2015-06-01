/* Name: Array.prototype methods
 * Category: built-in extensions
 * Significance: medium
 * Link: http://people.mozilla.org/~jorendorff/es6-draft.html#sec-properties-of-the-array-prototype-object
 */

/*
 * Test: Array.prototype.copyWithin
 */
function() {
    return typeof Array.prototype.copyWithin === 'function';
}

/*
 * Test: Array.prototype.find
 */
function() {
    return typeof Array.prototype.find === 'function';
}

/*
 * Test: Array.prototype.findIndex
 */
function() {
    return typeof Array.prototype.findIndex === 'function';
}

/*
 * Test: Array.prototype.fill
 */
function() {
    return typeof Array.prototype.fill === 'function';
}

/*
 * Test: Array.prototype.keys
 */
function() {
    return typeof Array.prototype.keys === 'function';
}

/*
 * Test: Array.prototype.values
 */
function() {
    return typeof Array.prototype.values === 'function';
}

/*
 * Test: Array.prototype.entries
 */
function() {
    return typeof Array.prototype.entries === 'function';
}

/*
 * Test: Array.prototype[Symbol.unscopables]
 */
function() {
    var unscopables = Array.prototype[Symbol.unscopables];
    if (!unscopables) {
      return false;
    }
    var ns = "find,findIndex,fill,copyWithin,entries,keys,values".split(",");
    for (var i = 0; i < ns.length; i++) {
      if (Array.prototype[ns[i]] && !unscopables[ns[i]]) return false;
    }
    return true;
}

