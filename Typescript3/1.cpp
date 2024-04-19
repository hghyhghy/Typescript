#include <iostream>

// Definition for singly-linked list.
struct ListNode {
    int val;
    ListNode *next;
    ListNode(int x) : val(x), next(nullptr) {}
};

ListNode* mergeTwoLists(ListNode* l1, ListNode* l2) {
    ListNode* dummy = new ListNode(0); // Dummy node to simplify merging logic
    ListNode* current = dummy; // Pointer to the current node in the merged list

    // Merge the lists until one of them is exhausted
    while (l1 != nullptr && l2 != nullptr) {
        if (l1->val < l2->val) {
            current->next = l1;
            l1 = l1->next;
        } else {
            current->next = l2;
            l2 = l2->next;
        }
        current = current->next;
    }

    // Append any remaining nodes from either list
    if (l1 != nullptr) {
        current->next = l1;
    }
    if (l2 != nullptr) {
        current->next = l2;
    }

    // Return the head of the merged list (skipping the dummy node)
    return dummy->next;
}

// Function to print the elements of a linked list
void printList(ListNode* head) {
    while (head != nullptr) {
        std::cout << head->val << " ";
        head = head->next;
    }
    std::cout << std::endl;
}

int main() {
    // Create two sorted linked lists
    ListNode* list1 = new ListNode(1);
    list1->next = new ListNode(2);
    list1->next->next = new ListNode(4);

    ListNode* list2 = new ListNode(1);
    list2->next = new ListNode(3);
    list2->next->next = new ListNode(4);

    // Merge the two lists and print the merged list
    ListNode* mergedList = mergeTwoLists(list1, list2);
    std::cout << "Merged list: ";
    printList(mergedList);

    // Clean up memory
    delete list1;
    delete list2;
    delete mergedList;

    return 0;
}
