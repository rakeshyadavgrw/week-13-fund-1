// *********Question-1***********

// let totalValue = 2000;
// let discountPercentage = 20;

// let discountPrice = totalValue - (discountPercentage / 100) * totalValue;
// console.log("The final price after discount is: Rs." + discountPrice);

// *********Question-2***********

// let username = "admin";
// let password = "12345";

// if (username === "admin" && password === "12345"){console.log("Login Successful");
// }else{
//     console.log("Invalid credentials");
// }

// *********Question-3***********

// let INR = 850;
// let USD = 850/82;

// console.log(`${INR} INR is ${USD} USD`)

// *********Question-4**********

// let numberOfChild = 2;
// let numberOfAdults = 1;
// let numberOfSeniors = 1;

// let childTicketPrice = 100;
// let adultTicketPrice = 150;
// let seniorTicketPrice = 120;

// let totalprice =
// numberOfChild * childTicketPrice +
// numberOfAdults * adultTicketPrice +
// numberOfSeniors * seniorTicketPrice;

// console.log(`The total ticket price is${totalprice}`)

// *********Question-5**********

// let typeOfPackage = "overnight";

// switch (typeOfPackage) {
//     case "standard":
//         console.log("Your package will be delivered next 3-5 days ");
//         break;
//     case "express":
//         console.log("Your package will be delivered next 1-2 days ");
//         break;
//     case "overnight":
//         console.log("Your package will be delivered by tomorrow")      
//         break;
//         default:
//         console.log("Invalid package type!!");  
// }

// *********Question-6**********

// let name = "Mithun";
// let email = "mithun.s@pw.live";
// let age = "21";

// if (typeof name !== "string") {
//   console.log(`Name Should Be A String..`);
// } else if (typeof email !== "string") {
//   console.log(`Email Should Be A String..`);
// } else if (typeof age !== "number") {
//   console.log(`Age Should Be A Number..`);
// } else {
//   console.log(`Yahh!!! All the fields are proper.`);
// }

// *********Question-7**********

// let shoppinglist = [
//     "Pen",
//     "Papper",
//     "Candy",
//     "Soda",
//     "Keyboard",
//     "Screen Protector",
// ];

// for(let i = 0; i< shoppinglist.length; i++){
//     console.log(shoppinglist[i]);
// }

// *********Question-8**********
// console.log("Counting From 10 to 0");
// let i = 0

// while (i <= 10) {
//     console.log(i);
//    i++;
// }

// *********Question-9**********

// const arr = [1,2,999,56,"Mithun",1234,"PW"];

// for (let i = 0; i < arr.length; i++ ) {
//     if(typeof arr[i] ==="string"){
//         console.log(`Found the first string: ${arr[i]}`);
//         break;
//     }
// }

// *********Question-10**********

let arr = [1, 2, -3, 5, -9, -8, -7, 7];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] < 0) {
    continue;
  }
  console.log(arr[i]);
}






