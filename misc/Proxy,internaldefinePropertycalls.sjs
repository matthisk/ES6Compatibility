/* Name: Proxy, internal 'defineProperty' calls
 * Category: misc
 * Significance: tiny
 * Link: http://www.ecma-international.org/ecma-262/6.0/#sec-proxy-object-internal-methods-and-internal-slots
 */

/*
 * Test: [[Set]]
 */
function() {
    // [[Set]] -> [[DefineOwnProperty]]
    var def = [];
    var p = new Proxy({foo:1, bar:2}, { defineProperty: function(o, v, desc) { def.push(v); Object.defineProperty(o, v, desc); return true; }});
    p.foo = 2; p.bar = 4;
    return def + '' === "foo,bar";
}

/*
 * Test: SetIntegrityLevel
 */
function() {
    // SetIntegrityLevel -> DefinePropertyOrThrow -> [[DefineOwnProperty]]
    var def = [];
    var p = new Proxy({foo:1, bar:2}, { defineProperty: function(o, v, desc) { def.push(v); Object.defineProperty(o, v, desc); return true; }});
    Object.freeze(p);
    return def + '' === "foo,bar";
}

