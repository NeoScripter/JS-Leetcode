import { makeNodeList, printNodeList, ListNode } from './make-node-list.js';

const values = [1, 2, 3, 4, 5];
const k = 2;

const head = makeNodeList(values);

function reverseList(dummy, stopNode) {
    let prev = stopNode;
    let node = dummy.next;

    while (node !== stopNode) {
        const temp = node.next;
        node.next = prev;
        prev = node;
        node = temp;
    }

    const tail = dummy.next;
    dummy.next = prev;

    return tail; 
}

var reverseKGroup = function (head, k) {
    const dummy = new ListNode(0, head);
    let groupPrev = dummy;

    while (true) {
        const kth = getKth(groupPrev, k);
        if (!kth) {
            break;
        }
        const groupNext = kth.next;

        let prev = kth.next;
        let curr = groupPrev.next;
        while (curr !== groupNext) {
            const tmp = curr.next;
            curr.next = prev;
            prev = curr;
            curr = tmp;
        }

        const tmp = groupPrev.next;
        groupPrev.next = kth;
        groupPrev = tmp;
    }

    return dummy.next;
};

function getKth(curr, k) {
    while (curr && k > 0) {
        curr = curr.next;
        k--;
    }
    return curr;
}
printNodeList(reverseKGroup(head, k));
