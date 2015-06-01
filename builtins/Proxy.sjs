/* Name: Proxy
 * Category: built-ins
 * Significance: large
 * Link: https://people.mozilla.org/~jorendorff/es6-draft.html#sec-proxy-object-internal-methods-and-internal-slots
 *//*
 * Test: "get" handler
 */
function gethandler() {
    var proxied = { };
    var proxy = new Proxy(proxied, {
      get: function (t, k, r) {
        return t === proxied && k === "foo" && r === proxy && 5;
      }
    });
    return proxy.foo === 5;
}

/*
 * Test: "get" handler, instances of proxies
 */
function gethandler,instancesofproxies() {
    var proxied = { };
    var proxy = Object.create(new Proxy(proxied, {
      get: function (t, k, r) {
        return t === proxied && k === "foo" && r === proxy && 5;
      }
    }));
    return proxy.foo === 5;
}

/*
 * Test: "set" handler
 */
function sethandler() {
    var proxied = { };
    var passed = false;
    var proxy = new Proxy(proxied, {
      set: function (t, k, v, r) {
        passed = t === proxied && k + v === "foobar" && r === proxy;
      }
    });
    proxy.foo = "bar";
    return passed;
}

/*
 * Test: "set" handler, instances of proxies
 */
function sethandler,instancesofproxies() {
    var proxied = { };
    var passed = false;
    var proxy = Object.create(new Proxy(proxied, {
      set: function (t, k, v, r) {
        passed = t === proxied && k + v === "foobar" && r === proxy;
      }
    }));
    proxy.foo = "bar";
    return passed;
}

/*
 * Test: "has" handler
 */
function hashandler() {
    var proxied = {};
    var passed = false;
    "foo" in new Proxy(proxied, {
      has: function (t, k) {
        passed = t === proxied && k === "foo";
      }
    });
    return passed;
}

/*
 * Test: "has" handler, instances of proxies
 */
function hashandler,instancesofproxies() {
    var proxied = {};
    var passed = false;
    "foo" in Object.create(new Proxy(proxied, {
      has: function (t, k) {
        passed = t === proxied && k === "foo";
      }
    }));
    return passed;
}

/*
 * Test: "deleteProperty" handler
 */
function deletePropertyhandler() {
  var proxied = {};
    var passed = false;
    delete new Proxy(proxied, {
      deleteProperty: function (t, k) {
        passed = t === proxied && k === "foo";
      }
    }).foo;
    return passed;
}

/*
 * Test: "getOwnPropertyDescriptor" handler
 */
function getOwnPropertyDescriptorhandler() {
    var proxied = {};
    var fakeDesc = { value: "foo", configurable: true };
    var returnedDesc = Object.getOwnPropertyDescriptor(
      new Proxy(proxied, {
        getOwnPropertyDescriptor: function (t, k) {
          return t === proxied && k === "foo" && fakeDesc;
        }
      }),
      "foo"
    );
    return (returnedDesc.value     === fakeDesc.value
      && returnedDesc.configurable === fakeDesc.configurable
      && returnedDesc.writable     === false
      && returnedDesc.enumerable   === false);
}

/*
 * Test: "defineProperty" handler
 */
function definePropertyhandler() {
    var proxied = {};
    var passed = false;
    Object.defineProperty(
      new Proxy(proxied, {
        defineProperty: function (t, k, d) {
          passed = t === proxied && k === "foo" && d.value === 5;
          return true;
        }
      }),
      "foo",
      { value: 5, configurable: true }
    );
    return passed;
}

/*
 * Test: "getPrototypeOf" handler
 */
function getPrototypeOfhandler() {
    var proxied = {};
    var fakeProto = {};
    var proxy = new Proxy(proxied, {
      getPrototypeOf: function (t) {
        return t === proxied && fakeProto;
      }
    });
    return Object.getPrototypeOf(proxy) === fakeProto;
}

/*
 * Test: "setPrototypeOf" handler
 */
function setPrototypeOfhandler() {
    var proxied = {};
    var newProto = {};
    var passed = false;
    Object.setPrototypeOf(
      new Proxy(proxied, {
        setPrototypeOf: function (t, p) {
          passed = t === proxied && p === newProto;
          return true;
        }
      }),
      newProto
    );
    return passed;
}

/*
 * Test: "isExtensible" handler
 */
function isExtensiblehandler() {
    var proxied = {};
    var passed = false;
    Object.isExtensible(
      new Proxy(proxied, {
        isExtensible: function (t) {
          passed = t === proxied; return true;
        }
      })
    );
    return passed;
}

/*
 * Test: "preventExtensions" handler
 */
function preventExtensionshandler() {
    var proxied = {};
    var passed = false;
    Object.preventExtensions(
      new Proxy(proxied, {
        preventExtensions: function (t) {
          passed = t === proxied;
          return Object.preventExtensions(proxied);
        }
      })
    );
    return passed;
}

/*
 * Test: "enumerate" handler
 */
function enumeratehandler() {
    var proxied = {};
    var passed = false;
    for (var i in
      new Proxy(proxied, {
        enumerate: function (t) {
          passed = t === proxied;
          return {
            next: function(){ return { done: true, value: null };}
          };
        }
      })
    ) { }
    return passed;
}

/*
 * Test: "ownKeys" handler
 */
function ownKeyshandler() {
    var proxied = {};
    var passed = false;
    Object.keys(
      new Proxy(proxied, {
        ownKeys: function (t) {
          passed = t === proxied; return [];
        }
      })
    );
    return passed;
}

/*
 * Test: "apply" handler
 */
function applyhandler() {
    var proxied = function(){};
    var passed = false;
    var host = {
      method: new Proxy(proxied, {
        apply: function (t, thisArg, args) {
          passed = t === proxied && thisArg === host && args + "" === "foo,bar";
        }
      })
    };
    host.method("foo", "bar");
    return passed;
}

/*
 * Test: "construct" handler
 */
function constructhandler() {
    var proxied = function(){};
    var passed = false;
    new new Proxy(proxied, {
      construct: function (t, args) {
        passed = t === proxied && args + "" === "foo,bar";
        return {};
      }
    })("foo","bar");
    return passed;
}

/*
 * Test: Proxy.revocable
 */
function Proxyrevocable() {
    var obj = Proxy.revocable({}, { get: function() { return 5; } });
    var passed = (obj.proxy.foo === 5);
    obj.revoke();
    try {
      obj.proxy.foo;
    } catch(e) {
      passed &= e instanceof TypeError;
    }
    return passed;
}

/*
 * Test: Array.isArray support
 */
function ArrayisArraysupport() {
    return Array.isArray(new Proxy([], {}));
}

/*
 * Test: JSON.stringify support
 */
function JSONstringifysupport() {
    return JSON.stringify(new Proxy(['foo'], {})) === '["foo"]';
}

