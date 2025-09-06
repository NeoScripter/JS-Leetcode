export class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

export function makeNodeList(values) {
    const dummy = new ListNode();
    let node = dummy;

    for (const value of values) {
        node.next = new ListNode(value);
        node = node.next;
    }

    return dummy.next;
}

export function printNodeList(head, currentNodeVal = null) {
    let values = "";
    let marks = "";

    let node = head;
    while (node) {
        values += ` ${node.val} `;
        
        if (node.val === currentNodeVal) {
            marks += ' v ';
        } else {
            marks += (' '.repeat(node.val.toString().length) + '  ');
        }
        node = node.next;
    }

    console.log(marks);
    console.log(values);
}

