function addTwoNumbers(l1, l2) {
    var before = new ListNode();
    var tail = before;
    var c = 0;
    
    while (l1 || l2 || c) {
        var v1 = l1 ? l1.val : 0;
        var v2 = l2 ? l2.val : 0;
        var curr = v1 + v2 + c;
        
        c = curr >= 10 ? 1 : 0;
        tail.next = new ListNode(curr % 10);
        
        tail = tail.next;
        l1 = l1 ? l1.next : l1;
        l2 = l2 ? l2.next : l2;
    }
    return before.next;
}
