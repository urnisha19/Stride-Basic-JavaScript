/** 
Datatypes
Primitive: String, Number, Boolean, Null, Undefined
Non-Primitive: Reference Variables(Object, Array, Function)
*/

//Primitive
let a = 5;
let b = a;
console.log("a: ", a);
console.log("b: ", b);

b = 6;
console.log("After changing value of b, a= ", a);
console.log("After changing value of b, b=: ", b);

//Non Primitive
let nums1 = [1, 2, 3];
let nums2 = nums1;
console.log("nums1: ", nums1);
console.log("nums2: ", nums2);

nums2.push(5);
console.log("After pushing 5 in nums2, nums1: ", nums1);
console.log("After pushing 5 in nums2, nums2: ", nums2);
