/* Name: Proxy, internal 'ownKeys' calls
 * Category: misc
 * Significance: tiny
 * Link: http://www.ecma-international.org/ecma-262/6.0/#sec-proxy-object-internal-methods-and-internal-slots
 */

/*
 * Test: SetIntegrityLevel
 */
function() {
    // SetIntegrityLevel -> [[OwnPropertyKeys]]
    var ownKeysCalled = 0;
    var p = new Proxy({}, { ownKeys: function(o) { ownKeysCalled++; return Object.keys(o); }});
    Object.freeze(p);
    return ownKeysCalled === 1;
}

/*
 * Test: TestIntegrityLevel
 */
function() {
    // TestIntegrityLevel -> [[OwnPropertyKeys]]
    var ownKeysCalled = 0;
    var p = new Proxy(Object.preventExtensions({}), { ownKeys: function(o) { ownKeysCalled++; return Object.keys(o); }});
    Object.isFrozen(p);
    return ownKeysCalled === 1;
}

/*
 * Test: SerializeJSONObject
 */
function() {
    // SerializeJSONObject -> EnumerableOwnNames -> [[OwnPropertyKeys]]
    var ownKeysCalled = 0;
    var p = new Proxy({}, { ownKeys: function(o) { ownKeysCalled++; return Object.keys(o); }});
    JSON.stringify({a:p,b:p});
    return ownKeysCalled === 2;
}

