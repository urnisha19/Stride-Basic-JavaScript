//-------------------------Spread operator in Array
//without using spread operator
const nums = [1, 2, 3, 4];
const nums2 = nums;
nums2.push(5);
console.log("nums: ", nums); // Output: [1, 2, 3, 4, 5]
console.log("nums2: ", nums2); // Output: [1, 2, 3, 4, 5]

//using spread operator
const nums3 = [...nums];
nums3.push(6);
console.log("nums: ", nums); // Output: [1, 2, 3, 4, 5]
console.log("nums3: ", nums3); // Output: [1, 2, 3, 4, 5, 6]

//-------------------------Spread operator in Object
//without using spread operator
let obj1 = { a: 1, b: 2 };
let obj2 = obj1;

obj2.a = 3;

console.log(obj1); // Output: { a: 3, b: 2 }
console.log(obj2); // Output: { a: 3, b: 2 }
/**এখানে, obj1 এবং obj2 একই রেফারেন্স শেয়ার করে, তাই obj2 এর একটি প্রপার্টি পরিবর্তন করলে obj1 এর প্রপার্টিও পরিবর্তিত হয়। */

//using spread operator
let obj3 = { a: 1, b: 2 };
let obj4 = { ...obj3 };

obj4.a = 3;

console.log(obj3); // Output: { a: 1, b: 2 }
console.log(obj4); // Output: { a: 3, b: 2 }
/**এখানে, স্প্রেড অপারেটর (...obj1) ব্যবহার করে obj1 এর একটি নতুন কপি তৈরি করা হয়েছে এবং obj2 এ অ্যাসাইন করা হয়েছে। তাই obj2 এর প্রপার্টি পরিবর্তন করলে obj1 এর প্রপার্টি অপরিবর্তিত থাকে। */

//-------------------------Destructuring
/*ডেস্ট্রাকচারিং হল জাভাস্ক্রিপ্টের একটি সিনট্যাক্স যা অ্যারে বা অবজেক্ট থেকে ভ্যালু বের করে আলাদা আলাদা ভেরিয়েবলে অ্যাসাইন করতে দেয়। */

//Array destructure
const numbers = [1, 2, 3, 4, 5];

//Normal Destructuring
const number1 = numbers[0];
const number2 = numbers[1];
console.log(number1, number2); //output: 1 2

//Destructuring using spread
const [num1, num2, ...others] = numbers;
console.log("Num1: ", num1); //output: Num1:  1
console.log("Num2: ", num2); //output: Num2:  2
console.log("others: ", others); //output: others:  [ 3, 4, 5 ]

//Object destructuring
const person = {
    name: "John",
    age: 30,
    job: "Developer",
    country: "USA",
};

// Normal destructuring
const { name, age } = person;
console.log(name); // Output: John
console.log(age); // Output: 30

//Destructuring using spread operator
const person2 = { ...person };
person2.isMarried = true;
console.log(person2);

//destructuring
const { job, country, ...rest } = person2;
console.log(job); // Output: Developer
console.log(country); // Output: USA
console.log(rest); // Output: { name: 'John', age: 30, isMarried: true }
