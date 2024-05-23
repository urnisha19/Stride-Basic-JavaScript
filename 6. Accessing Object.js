/**
 Accessing Object
 1. Nested Object 
 2. Optional Chaining
 */

const user = {
    name: "Karim",
    contact: {
        phone: "01400000",
        email: "user@user.com",
    },
    pet: {
        name: "Jacky",
        info: {
            color: "Black",
            weight: "1.5 kg",
        },
    },
    familyMembers: [
        { name: "X", age: 54 },
        { name: "y", age: 40 },
    ],
};
console.log("user: ", user);

//------------------------------------------------access email
//normally accessing
const userEmail = user.contact.email;
console.log("Normally accessing email: ", userEmail);

//if we use destructure here to access
const { contact: { email } } = user; //user theke destructure korbo
console.log("Accessing email using destructuring: ", email);

//------------------------------------------------access pet color
//normally accessing
const petColor = user.pet.info.color;
console.log("Normally accessing pet color: ", petColor);

//if we use destructure here
const { pet: { info: { color } } } = user;
console.log("Accessing pet color using destructuring: ", color);
//------------------------------------------------access family member age
//normally accessing
const member2age = user.familyMembers[1].age;
console.log("Normally accessing second family member age: ", member2age);

//if we use destructure here
const { familyMembers: [member1, member2] } = user;
//const {age} = member2;
//console.log('Accessing  second family member age using destructuring: ',age);
const { familyMembers: [{ name, age }, { name: name2, age: age2 }], } = user; //ekhane name: name2 dara object er element rename kor hoyeche.
console.log("Accessing family member using destructuring: ", age2);

//Optional Chaining
const isPetOverWeight = user?.pet?.info?.weight?.overweight;
console.log("is pet over weight: ", isPetOverWeight);
/*output will be undefined because there was no element as overweight in our object, 
if we did not used optional chaining there it would show error. to avoid this error we use optional chaining*/
