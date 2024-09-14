// Problem : Merge Two Sorted Linked Lists

function mergeTwoLists(l1, l2) {
    
    if (!l1) return l2; // Base case: If the first list is empty, return the second list
    if (!l2) return l1; // Base case: If the second list is empty, return the first list

    // Recursive case
    if (l1.data < l2.data) {
        l1.next = mergeTwoLists(l1.next, l2); // l1 is smaller, so we merge l1.next and l2
        return l1; // Return l1 as the head of the merged list
    } else {
        l2.next = mergeTwoLists(l1, l2.next); // l2 is smaller or equal, so we merge l1 and l2.next
        return l2; // Return l2 as the head of the merged list
    }
}