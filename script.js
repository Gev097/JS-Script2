// Խնդիր 1. Տրված են a և b բնական թվերը: Արտածել YES, եթե
function checkBnakan(a, b) {
    // a) դրանք երկուսն էլ կենտ են,
    if (a % 2 !== 0 && b % 2 !== 0) {
        console.log("YES"); 
    } else { console.log("NO");}
}
console.log("Խնդիր 1 :");
checkBnakan(3, 5);

function checkBnakan1(a, b) {
    // b) դրանցից գոնե մեկը կենտ է,
    if (a % 2 !== 0 || b % 2 !== 0) {
        console.log("YES"); 
    } else { console.log("NO");}
}
checkBnakan1(2, 3);

function checkBnakan2(a, b) {
    // c) դրանցից ճիշտ մեկը կենտ է,
    if ((a % 2 !== 0 && b % 2 === 0) || (a % 2 === 0 && b % 2 !== 0)){
        console.log("YES"); 
    } else { console.log("NO");}
}
checkBnakan2(3, 2);

function checkBnakan3(a, b) {
    // d) դրանք երկուսն էլ կենտ են կամ երկուսն էլ զույգ:
    if ((a % 2 === 0 && b % 2 === 0) || (a % 2 !== 0 && b % 2 !== 0)){
        console.log("YES"); 
    } else { console.log("NO");}
}
checkBnakan3(4, 6);
 


// Խնդիր 2. Տրված են a, b և c ամբողջ թվերը: Արտածել YES, եթե դրանցից
function checkAmboxj(a, b, c) {
    // a) գոնե մեկը զրո է,
    if (a === 0 || b === 0 || c === 0) {
        console.log("YES"); 
    } else { console.log("NO");}
}
console.log("\nԽնդիր 2 :");
checkAmboxj(0, 2, 3);

function checkAmboxj1(a, b, c) {
    // b) ճիշտ մեկը հինգ է,
    if (( a === 5 && b !== 5 && c !== 5) || ( a !== 5 && b === 5 && c !== 5) || ( a !== 5 && b !== 5 && c === 5)) {
        console.log("YES"); 
    } else { console.log("NO");}
}
checkAmboxj1(1, 5, 2);

function checkAmboxj2(a, b, c) {
    // c) ոչ մեկը մյուսներին հավասար չէ,
    if (a !== b && a !== c && b !== c) {
        console.log("YES"); 
    } else { console.log("NO");}
}
checkAmboxj2(1, 2, 3);

function checkAmboxj3(a, b, c) {
    // c) ոչ մեկը մյուսներին հավասար չէ,
    if (a !== b && a !== c && b !== c){
        console.log("YES"); 
    } else { console.log("NO");}
}
checkAmboxj3(1, 2, 5);

function checkAmboxj4(a, b, c) {
    // d) ճիշտ երկուսն են հավասար,
    if ((a === b && a !== c) || (a === c && a !== b) || (b === c && b !== a)){
        console.log("YES"); 
    } else { console.log("NO");}
}
checkAmboxj4(1, 2, 2);

function checkAmboxj5(a, b, c) {
    // e) բոլոր երեքն իրար հավասար են,
    if (a === b && b === c){
        console.log("YES"); 
    } else { console.log("NO");}
}
checkAmboxj5(4, 4, 4);

function checkAmboxj6(a, b, c) {
    // f) գոնե մեկը բացասական է,
    if (a < 0 || b < 0 || c < 0){
        console.log("YES"); 
    } else { console.log("NO");}
}
checkAmboxj6(-1, 2, 3);

