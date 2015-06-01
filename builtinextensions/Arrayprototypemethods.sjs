/* Name: Array.prototype methods
 * Category: built-in extensions
 * Significance: medium
 * Link: http://people.mozilla.org/~jorendorff/es6-draft.html#sec-properties-of-the-array-prototype-object
 *//*
 * Test: Array.prototype.copyWithin
 */
function ArrayprototypecopyWithin() {
    return typeof Array.prototype.copyWithin === 'function';
}

/*
 * Test: Array.prototype.find
 */
function Arrayprototypefind() {
    return typeof Array.prototype.find === 'function';
}

/*
 * Test: Array.prototype.findIndex
 */
function ArrayprototypefindIndex() {
    return typeof Array.prototype.findIndex === 'function';
}

/*
 * Test: Array.prototype.fill
 */
function Arrayprototypefill() {
    return typeof Array.prototype.fill === 'function';
}

/*
 * Test: Array.prototype.keys
 */
function Arrayprototypekeys() {
    return typeof Array.prototype.keys === 'function';
}

/*
 * Test: Array.prototype.values
 */
function Arrayprototypevalues() {
    return typeof Array.prototype.values === 'function';
}

/*
 * Test: Array.prototype.entries
 */
function Arrayprototypeentries() {
    return typeof Array.prototype.entries === 'function';
}

/*
 * Test: Array.prototype[Symbol.unscopables]
 */
function Arrayprototype[Symbolunscopables]() {
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

