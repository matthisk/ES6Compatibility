/* Name: RegExp "y" and "u" flags
 * Category: syntax
 * Significance: medium
 * Link: https://people.mozilla.org/~jorendorff/es6-draft.html#sec-get-regexp.prototype.sticky
 */

/*
 * Test: "y" flag
 */
function() {
    var re = new RegExp('\\w');
    var re2 = new RegExp('\\w', 'y');
    re.exec('xy');
    re2.exec('xy');
    return (re.exec('xy')[0] === 'x' && re2.exec('xy')[0] === 'y');
}

/*
 * Test: "u" flag
 */
function() {
    return "𠮷".match(/^.$/u)[0].length === 2;
}

