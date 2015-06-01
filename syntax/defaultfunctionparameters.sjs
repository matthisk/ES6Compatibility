/* Name: default function parameters
 * Category: syntax
 * Significance: medium
 * Link: https://people.mozilla.org/~jorendorff/es6-draft.html#sec-functiondeclarationinstantiation
 *//*
 * Test: basic functionality
 */
function basicfunctionality() {
    return (function (a = 1, b = 2) { return a === 3 && b === 2; }(3));
}

/*
 * Test: explicit undefined defers to the default
 */
function explicitundefineddeferstothedefault() {
    return (function (a = 1, b = 2) { return a === 1 && b === 3; }(undefined, 3));
}

/*
 * Test: defaults can refer to previous params
 */
function defaultscanrefertopreviousparams() {
    return (function (a, b = a) { return b === 5; }(5));
}

/*
 * Test: temporal dead zone
 */
function temporaldeadzone() {
    return (function(x = 1) {
      try {
        eval("(function(a=a){}())");
        return false;
      } catch(e) {}
      try {
        eval("(function(a=b,b){}())");
        return false;
      } catch(e) {}
      return true;
    }());
}

/*
 * Test: separate scope
 */
function separatescope() {
    return (function(a=function(){
      return typeof b === 'undefined';
    }){
      var b = 1;
      return a();
    }());
}

/*
 * Test: new Function() support
 */
function newFunctionsupport() {
    return new Function("a = 1", "b = 2",
      "return a === 3 && b === 2;"
    )(3);
}

