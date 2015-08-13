/* Name: RegExp "y" and "u" flags
 * Category: syntax
 * Significance: medium
 * Link: http://www.ecma-international.org/ecma-262/6.0/#sec-get-regexp.prototype.sticky
 */

/*
 * Test: "y" flag
 */
function() {
    var re = new RegExp('\\w', 'y');
    re.exec('xy');
    return (re.exec('xy')[0] === 'y');
}

/*
 * Test: "y" flag, lastIndex
 */
function() {
    var re = new RegExp('yy', 'y');
    re.lastIndex = 3;
    var result = re.exec('xxxyyxx')[0];
    return result === 'yy' && re.lastIndex === 5;
}

/*
 * Test: "u" flag
 */
function() {
    return "𠮷".match(/^.$/u)[0].length === 2;
}

/*
 * Test: "u" flag, Unicode code point escapes
 */
function() {
    return "𝌆".match(/\u{1d306}/u)[0].length === 2;
}

