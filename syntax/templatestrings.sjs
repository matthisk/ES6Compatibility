/* Name: template strings
 * Category: syntax
 * Significance: large
 * Link: https://people.mozilla.org/~jorendorff/es6-draft.html#sec-template-literals
 *//*
 * Test: basic functionality
 */
function basicfunctionality() {
    var a = "ba", b = "QUX";
    return `foo bar
    ${a + "z"} ${b.toLowerCase()}` === "foo bar\nbaz qux";
}

/*
 * Test: tagged template strings
 */
function taggedtemplatestrings() {
    var called = false;
    function fn(parts, a, b) {
      called = true;
      return parts instanceof Array &&
        parts[0]     === "foo"      &&
        parts[1]     === "bar\n"    &&
        parts.raw[0] === "foo"      &&
        parts.raw[1] === "bar\\n"   &&
        a === 123                   &&
        b === 456;
    }
    return fn `foo${123}bar\n${456}` && called;
}

