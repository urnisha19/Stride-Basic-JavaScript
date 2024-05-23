const num1 = 20;
const num2 = 30;

//If else
if (num1 > num2) {
    console.log("Number 1 is greater");
} else if (num1 < num2) {
    console.log("Number 2 is greater");
} else {
    console.log("Number 1 is equal to Number 2");
}

//Ternary Operator
num1 > num2 ? console.log("Number 1 is greater") :
    num2 > num1 ? console.log("Number 2 is greater") :
        console.log("Number 1 is equal to Number 2");

//Switch case
const score = 70;
switch (true) {            //Swtich case e (true) likha oyese jate condition true hole oi case er kaj kore
    case score >= 80:
        console.log('A+');
        break;
    case score >= 70:
        console.log('A');
        break;
    case score >= 60:
        console.log('A-');
        break;
    case score >= 50:
        console.log('B');
        break;
    case score >= 40:
        console.log('C');
        break;
    case score >= 33:
        console.log('D');
        break
    default:
        console.log('F');
}

//switch
const color = 'white';
switch (color) {
    case 'red':
        console.log("Danger");
        break;
    case 'green':
        console.log("Safe");
        break;
    case 'orange':
        console.log('Warning')
        break;
    default:
        console.log("Normal");
}