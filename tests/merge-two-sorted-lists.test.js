/**
 Merge two sorted linked lists and return it as a sorted list. The list should be made by splicing together the nodes of the first two lists.

 Input: l1 = [1,2,4], l2 = [1,3,4]
 Output: [1,1,2,3,4,4]

 Input: l1 = [], l2 = []
 Output: []

 Input: l1 = [], l2 = [0]
 Output: [0]

 Constraints:

 The number of nodes in both lists is in the range [0, 50].
 -100 <= Node.val <= 100
 Both l1 and l2 are sorted in non-decreasing order.
 */

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next);
    this.toArray = function () {
        return [this.val, ...(this.next ? this.next.toArray() : [])]
    }
}

function CreateList(arr) {
    let node, curr;
    for (let val of arr) {
        if (!node) {
            node = curr = new ListNode(val)
        } else {
            curr.next = new ListNode(val);
            curr = curr.next;
        }
    }
    return node;
}

let mergeTwoLists = function (l1, l2) {
    if (!l1)
        return l2
    if (!l2)
        return l1;
    let node, curr;
    node = curr = new ListNode();
    while (l1 && l2) {
        if (l1.val < l2.val) {
            curr.next = l1;
            l1 = l1.next;
        } else {
            curr.next = l2;
            l2 = l2.next;
        }
        curr = curr.next
    }
    curr.next = l1 || l2;
    return node.next;
};

it('use case 1', function () {
    const r = mergeTwoLists(CreateList([1, 2, 4]), CreateList([1, 3, 4]));
    expect(r.toArray()).toEqual([1, 1, 2, 3, 4, 4])
});

it('use case 2', function () {
    const r = mergeTwoLists(CreateList([]), CreateList([]));
    expect(r).toEqual(undefined)
});

it('use case 3', function () {
    const r = mergeTwoLists(CreateList([]), CreateList([0]));
    expect(r.toArray()).toEqual([0])
});

it('use case 4', function () {
    const r = mergeTwoLists(CreateList([0]), CreateList([]));
    expect(r.toArray()).toEqual([0])
});

it('use case 5', function () {
    const r = mergeTwoLists(CreateList([1, 3, 4]), CreateList([1, 2, 4]));
    expect(r.toArray()).toEqual([1, 1, 2, 3, 4, 4])
});

it('use case 6', function () {
    const r = mergeTwoLists(CreateList([1, 3]), CreateList([1, 2, 4]));
    expect(r.toArray()).toEqual([1, 1, 2, 3, 4])
});

it('use case 7', function () {
    const r = mergeTwoLists(CreateList([1, 2, 4]), CreateList([1, 3]));
    expect(r.toArray()).toEqual([1, 1, 2, 3, 4])
});
