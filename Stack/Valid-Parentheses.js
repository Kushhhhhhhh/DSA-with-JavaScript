// Problem Statement:
// Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid. Key idea: Use a stack to ensure every opening bracket has a corresponding closing one.

function isValid (s) {

    let stack = [];
    let map = {
        '(' : ')',
        '[' : ']',
        '{' : '}'
    }

    for(let char of s) {
        if(map[char]) {
            stack.push(char);
        } else {
            let last = stack.pop();
            if(map[last] !== char){
                return false;
            }
        }
    }

    return stack.length === 0;
};