//  merged sorted array 

 var merge = function(nums1:number[],m:number,nums2:number[],n:number){

    // initializing pointers 

    let i = m-1
    let j= n-1
    let k =m+n -1

    while ( i>=0 && j>=0){

        if(nums1[i] > nums2[j]){

            nums1[k] = nums1[i]
             
            i--
        }
        else{

            nums1[k] = nums2[j]
            j--
        }
        k--
    }

    while ( j>= 0){
        nums1[k] = nums2[j]
        j--
        k--
    }

    return nums1
 }

 let n1:number[]=[1,2,3,5,6,7]
 let m:number =3
 let n2:number[]=[100,900,566]
 let n4:number = 3
 console.log(merge(n1,m,n2,n4))