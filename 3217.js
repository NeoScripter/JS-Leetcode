var modifiedList = function (nums, head) {
    const dummy = new ListNode(-1, head);
    const seen = new Set(nums);

    let node = dummy;
    while (node) {
        while (node.next && seen.has(node.next.val)) {
            node.next = node.next.next;
        }

        node = node.next;
    }

    return dummy.next;
};
