/* Name: Proxy, internal 'getOwnPropertyDescriptor' calls
 * Category: misc
 * Significance: tiny
 * Link: http://www.ecma-international.org/ecma-262/6.0/#sec-proxy-object-internal-methods-and-internal-slots
 */

/*
 * Test: [[Set]]
 */
function() {
    // [[Set]] -> [[GetOwnProperty]]
    var gopd = [];
    var p = new Proxy({},
      { getOwnPropertyDescriptor: function(o, v) { gopd.push(v); return Object.getOwnPropertyDescriptor(o, v); }});
    p.foo = 1; p.bar = 1;
    return gopd + '' === "foo,bar";
}

/*
 * Test: Object.assign
 */
function() {
    // Object.assign -> [[GetOwnProperty]]
    var gopd = [];
    var p = new Proxy({foo:1, bar:2},
      { getOwnPropertyDescriptor: function(o, v) { gopd.push(v); return Object.getOwnPropertyDescriptor(o, v); }});
    Object.assign({}, p);
    return gopd + '' === "foo,bar";
}

/*
 * Test: Object.prototype.hasOwnProperty
 */
function() {
    // Object.prototype.hasOwnProperty -> HasOwnProperty -> [[GetOwnProperty]]
    var gopd = [];
    var p = new Proxy({foo:1, bar:2},
      { getOwnPropertyDescriptor: function(o, v) { gopd.push(v); return Object.getOwnPropertyDescriptor(o, v); }});
    p.hasOwnProperty('garply');
    return gopd + '' === "garply";
}

/*
 * Test: Function.prototype.bind
 */
function() {
    // Function.prototype.bind -> HasOwnProperty -> [[GetOwnProperty]]
    var gopd = [];
    var p = new Proxy(Function(),
      { getOwnPropertyDescriptor: function(o, v) { gopd.push(v); return Object.getOwnPropertyDescriptor(o, v); }});
    p.bind();
    return gopd + '' === "length";
}

