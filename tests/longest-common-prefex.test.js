/**
 Write a function to find the longest common prefix string amongst an array of strings.

 If there is no common prefix, return an empty string "".



 Example 1:

 Input: strs = ["flower","flow","flight"]
 Output: "fl"
 Example 2:

 Input: strs = ["dog","racecar","car"]
 Output: ""
 Explanation: There is no common prefix among the input strings.


 Constraints:

 1 <= strs.length <= 200
 0 <= strs[i].length <= 200
 strs[i] consists of only lower-case English letters.
 **/


// function longestCommonPrefix(arr) {
//     let lcp = "";
//     for (let i = 0; i < arr[0].length; i++) {
//         let counter = 1;
//         for (let j = 1; j < arr.length; j++) {
//             if (arr[j][i] === arr[0][i])
//                 counter++;
//         }
//         if (counter < arr.length)
//             return lcp;
//         else
//             lcp = lcp + arr[0][i];
//     }
//     return lcp;
// }


function longestCommonPrefix(strs) {
    function node() {
        this.children = {};
        this.end = false;
    }

    let dummyHead = new node();
    for (let item of strs) {
        if(item.length === 0)
            return ""
        let parentNode = dummyHead;
        for (let i = 0; i < item.length; i++) {
            let childNode = parentNode.children[item[i]] || new node()
            parentNode.children[item[i]] = childNode;
            if(i === item.length - 1)
                childNode.end = true;
            parentNode = childNode;
        }
    }

    let lcp = "";
    let parentNode = dummyHead;
    for(let i of strs[0]){
        if(Object.keys(parentNode.children).length > 1 || !parentNode.children[i] || parentNode.end)
            return lcp;
        lcp = lcp + i;
        parentNode = parentNode.children[i]
    }
    return lcp
}

it("use case 1", function () {
    expect(longestCommonPrefix(["flower", "flow", "flight"])).toEqual("fl")
});
it("use case 2", function () {
    expect(longestCommonPrefix(["dog", "racecar", "car"])).toEqual("")
});

it("use case 3", function () {
    expect(longestCommonPrefix(["dog", "dog", "dog"])).toEqual("dog")
});
it("use case 4", function () {
    expect(longestCommonPrefix(["ab", "a"])).toEqual("a")
});
it("use case 5", function () {
    expect(longestCommonPrefix(["abab","aba",""])).toEqual("")
});
