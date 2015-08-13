/* Name: default function parameters
 * Category: syntax
 * Significance: medium
 * Link: http://www.ecma-international.org/ecma-262/6.0/#sec-functiondeclarationinstantiation
 */

/*
 * Test: basic functionality
 */
function() {
    return (function (a = 1, b = 2) { return a === 3 && b === 2; }(3));
}

/*
 * Test: explicit undefined defers to the default
 */
function() {
    return (function (a = 1, b = 2) { return a === 1 && b === 3; }(undefined, 3));
}

/*
 * Test: defaults can refer to previous params
 */
function() {
    return (function (a, b = a) { return b === 5; }(5));
}

/*
 * Test: temporal dead zone
 */
function() {
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
function() {
    return (function(a=function(){
      return typeof b === 'undefined';
    }){
      var b = 1;
      return a();
    }());
}

