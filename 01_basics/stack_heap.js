// Stack (Primitive) and Heap (Non-Primitive) Memory in JavaScript


//Primitive types

let myGithub = "parimalbhawane.com";
let myWebsite = myGithub;
myWebsite = "parimal.com";

console.log(myGithub);
console.log(myWebsite);

// Non-primitive types

let userOne = {
    email: "Parimal@gmail.com",
    upi: "user@ybl",
};

let userTwo = userOne;

userTwo.email = "Parimal@22,com";

console.log(userOne.email);
console.log(userTwo.email);

/* Primitive types are stored in the stack memory, 
 while non-primitive types are stored in the heap memory. 
 When we assign a primitive type to a variable, the value is copied to the new variable. 
 However, when we assign a non-primitive type to a variable, the reference is copied to the new variable. 
 This means that when we change the value of the new variable, the value of the original variable is also changed.
  This is because both variables point to the same object in memory.*/
  // Output
    // parimalbhawane.com
    // parimal.com
    // Parimal@22,com


/* non-primitive types are stored in the heap memory.
 When we assign a non-primitive type to a variable, the reference is copied to the new variable.
 This means that when we change the value of the new variable, the value of the original variable is also changed.
 This is because both variables point to the same object in memory.*/
    // Output
        // Parimal@22,com
        // Parimal@22,com






