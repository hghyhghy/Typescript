//  merged two sorted list 
var mergeTwoLists = function(l1,l2){

    // / initializing the node 
    function listnode(val =0,next =null){

        return {val:val , next:next}
    }

     const dummy = listnode()
     let current  = dummy 

    //   using while loop to iterate over the lists 
    while( l1!==null && l2!==null){

        if(l1.val < l2.val){
            //   moving to the merged list
            current.next = l1
            // / moving towards  the next node of l1
            l1= l1.next
        } else{
            current.next = l2
            l2 = l2.next
        }

        current = current.next
        // moving the mergelist pointer to the last added value 
    }

     if( l1 !==null){
        current.next = l1
     }

     if(l2 !==null){
        current.next =l2
     }

     return dummy.next
    //   giving the head of the merged list skipping the dummy node 
}

const list1 = { val: 1, next: { val: 2, next: { val: 4, next: null } } };
const list2 = { val: 1, next: { val: 3, next: { val: 4, next: null } } };

const mergedlist = mergeTwoLists(list1,list2)

function mergedarray(head){

    let result =[]
    // initializing empty array 

    while( head !== null){

        result.push(head.val)
        //  moving towards next val of head 
        head =  head.next
    }

     return result 
}

 console.log(mergedarray(mergedlist))