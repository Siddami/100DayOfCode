## Reverse Printing a Linked List (Day 12 Challenge)

This document covers the solution for a coding challenge encountered on Day 12 of a #100DaysOfCode journey. The challenge involves reversing a singly-linked list and printing the values of each node in the reversed order.

**Problem Statement:**

Given the head of a singly-linked list, print the values of each node in **reverse order**. If the list is empty, do not print anything.

**Example:**

Consider a linked list with values: 1 -> 2 -> 3

The expected output would be:

```
3
2
1
```

**Solution:**

We'll achieve this by implementing a function called `reversePrint` that takes the head of the linked list as input. The function leverages recursion to traverse the list backwards and print the values in reverse order.

**Here's the code breakdown:**

```javascript
function reversePrint(llist) {
  if(!llist){
      return
  }
  
  function printReverse(node){
      if(!node){
          return
      }
      
      printReverse(node.next)
      console.log(node.val)
  }
  
  printReverse(llist)
}
```

## Explanation:

1. Base Case Check: The function checks if the llist (head of the list) is null. If so, the list is empty, and the function returns without printing.
2. Recursive Helper Function: The printReverse function uses recursion for the reversal logic. It has a base case to stop recursion when the node reaches the end (null).
3. Recursive Call: The function calls itself on the next node, effectively moving backwards through the list.
4. Printing in Reverse Order: The function prints the current node's value after the recursive call on its next node, achieving the reversed order.
5. Starting the Reverse Printing: The function is called with the head node (llist), kicking off the recursive process and starting the printing from the beginning (end of the reversed list).

## Key Points:

Recursion allows us to traverse the list backwards without modifying the original structure.
Printing after the recursive call ensures the reversed order.

## Additional Notes:
This solution focuses on the core logic of reversing and printing the linked list. In a practical implementation, you might need to consider error handling or integrating this function into a larger program that deals with creating and manipulating linked lists.

