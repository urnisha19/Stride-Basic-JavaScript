//-----------------------------------------------------------Callback function
// A function
function greeting(name) {
    console.log('Hello From callback function ', name);
}

// Another function where a callback function is passing
function processUserInput(name, callback) {
    console.log("Hello from userInput function ", name);
    callback(name); //name is passing in the callBack function as parameter
}

//Calling function: here we called the processUserInput function and pass greeting function as callBack function
processUserInput('Foysal', greeting);

//-----------------------------------------------------------setTimeout
setTimeout(() => {
    console.log("This message is shown after 3 seconds");
}, 3000); // 3000 মিলিসেকেন্ড = 3 সেকেন্ড

//-----------------------------------------------------------Indexing
const nums = [10, 20, 30, 40, 50];

nums.map((item, index) => console.log(item, 'index:', index))
//array er map/forEach etc method e 1st parameter holo item and second parameter e amra index peye jabo