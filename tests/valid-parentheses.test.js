/**
 Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

 An input string is valid if:

 Open brackets must be closed by the same type of brackets.
 Open brackets must be closed in the correct order.
 Constraints:

 1 <= s.length <= 104
 s consists of parentheses only '()[]{}'.
 */


function isValid(s) {
    const stack = [];
    for (let c of s) {
        let j = stack[stack.length - 1];
        if ((c === "}" && j === "{") || (c === ")" && j === "(") || (c === "]" && j === "["))
            stack.pop();
        else
            stack.push(c);
    }
    return stack.length === 0;
}

it('use case 1', function () {
    expect(isValid("()")).toBeTruthy();
});

it('use case 2', function () {
    expect(isValid("()[]{}")).toBeTruthy();
});

it('use case 3', function () {
    expect(isValid("(]")).toBeFalsy();
});

it('use case 4', function () {
    expect(isValid("([)]")).toBeFalsy();
});

it('use case 5', function () {
    expect(isValid("{[]}")).toBeTruthy();
});

it('use case 5', function () {
    expect(isValid("({]}")).toBeFalsy();
});

it('use case 5', function () {
    expect(isValid("[")).toBeFalsy();
});

it('use case 5', function () {
    expect(isValid("((")).toBeFalsy();
});
