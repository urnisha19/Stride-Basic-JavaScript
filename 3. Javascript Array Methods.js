/*
Array Methods: forEach, map, find, filter, reducer
*/
const numbers = [10, 20, 30, 40, 50];
console.log("numbers: ", numbers);

//forEach
numbers.forEach((items) =>
    console.log("Accessing Array items using forEach", items)
); //this will show each item one by one
const numbers1 = numbers.forEach((items) => items);
console.log("foreach return numbers1: ", numbers1); //this output will show undefined because forEach can not return array/anything

//map
numbers.map((items) => console.log("Accessing Array items using map", items));
const numbers2 = numbers.map((items) => items);
console.log("Map return: ", numbers2);

const numbers3 = numbers.map((items) => items + 5); //updating array
console.log("Map updated array: ", numbers3);

//find
const findedValue = numbers.find((items) => items > 20);
console.log("Finded value greater than 20: ", findedValue);

//filter
const filteredItems = numbers.filter((items) => items < 40);
console.log("Filtered items less than 40: ", filteredItems);

//reduce
const sumItems = numbers.reduce(
    (accumulator, currentValue) => accumulator + currentValue
);
console.log("Sum: ", sumItems);

/* 
accumulator: এটি  callback ফাংশনের প্রথম প্যারামিটার যা আগের কলব্যাকের রিটার্ন ভ্যালু ধারণ করে। accumulator শুরুতে 0  দ্বারা ইনিশিয়ালাইজ করা হয়েছে।
currentValue: এটি অ্যারের বর্তমান উপাদান।

প্রতিটি ইটারেশনে accumulator এর সাথে currentValue যোগ করা হয় এবং নতুন মান অ্যাকিউমুলেটরে সঞ্চিত হয়।

Array = [ 10, 20, 30, 40, 50 ]
Step 1: Accumulator + Current value = 0 + 10 = 10
Step 2: Accumulator + Current value = 10 + 20 = 30
Step 3: Accumulator + Current value = 30 + 30 = 60
Step 4: Accumulator + Current value = 60 + 40 = 100
Step 5: Accumulator + Current value = 100 + 50 = 150
*/
