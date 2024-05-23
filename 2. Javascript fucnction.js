/* 
Function:
1. Normal/Regular function:
2. Arrow Function

Their Difference:
1. Syntax
2. Function Declaration and Function Expression
3. this binding
4. Access before declaration
*/
/*----------------------------Syntax and Function Declaration and Function Expression----------------------------*/
//Normal Function declaration and Expression both
//Normal Function declaration
console.log('Access before declare: ', add(7, 7));//Access before declare
function add(num1, num2) {
    return num1 + num2;
}
console.log(add(7, 7));

//Or, Normal Function Expression
const add2 = function (num1, num2) {
    return num1 + num2;
};
console.log(add2(7, 7));

//Arrow function only Expression
//Arrow Function Expression
const add3 = (num1, num2) => num1 + num2;
console.log(add3(7, 7));

//Or,Arrow Function Expression
const add4 = (num1, num2) => {
    return num1 + num2;
};
console.log(add4(7, 7));

/*----------------------------this binding----------------------------*/
//Normal Function: Normal ফাংশনে this keyword তার parent অবজেক্ট কে access করতে পারে।
let user = {
    age: 65,
    getAge: function () {
        console.log("Normal function: ", this.age);
    },
};
user.getAge();

//Arrow Function: Arrow ফাংশনে this keyword তার parent অবজেক্ট কে access করতে পারে না।
let user2 = {
    age: 65,
    getAgeDetails: () => {
        console.log("Arrow function: ", this.age);
    },
};
user2.getAgeDetails();
