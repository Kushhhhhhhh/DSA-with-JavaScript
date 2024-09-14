// Traversal in Linked List

// How it works:
// current is equal to head pointing to the node with starting data
// in while loop , current is equal to current.next means traversing through the list
// and we do console to print our list

function traverse ( head ) {
    let current = head;
    while(current){
        console.log(current.data);
        current = current.next
    }
}